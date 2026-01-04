import axios from 'axios';
import { toast } from 'sonner';

// Get environment variables
const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_PATH;
const apiKey = process.env.NEXT_PUBLIC_X_API_PK;

// Warn if environment variables are not set
if (!baseURL) {
    console.warn(
        '⚠️ NEXT_PUBLIC_SERVER_BASE_PATH is not set in .env.local\n' +
        'API requests will fail. Please add:\n' +
        'NEXT_PUBLIC_SERVER_BASE_PATH=https://your-api-url.com'
    );
}

if (!apiKey) {
    console.warn(
        '⚠️ NEXT_PUBLIC_X_API_PK is not set in .env.local\n' +
        'API authentication will fail. Please add:\n' +
        'NEXT_PUBLIC_X_API_PK=your-api-key'
    );
}

// Create axios instance with base configuration
const apiClient = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor variables
let isRefreshing = false;
let failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return apiClient(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Attempt to refresh token
                const response = await apiClient.post('/students/refresh-token/');

                if (response.data?.status && response.data?.data?.access_token) {
                    const newToken = response.data.data.access_token;
                    localStorage.setItem('access_token', newToken);

                    apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                    processQueue(null, newToken);

                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return apiClient(originalRequest);
                } else {
                    throw new Error('Refresh failed');
                }
            } catch (refreshError) {
                processQueue(refreshError, null);
                // Logout logic
                localStorage.removeItem('access_token');
                if (typeof window !== 'undefined') {
                    window.location.href = '/';
                }
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        // Handle other errors globally
        if (error.response) {
            // Server responded with error status
            toast.error(`API Error: ${error.response.data?.message || error.response.statusText || 'Something went wrong'}`);
        } else if (error.request) {
            // Request made but no response
            toast.error(`Network Error: ${error.message}`);
        } else {
            // Something else happened
            toast.error(`Error: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
