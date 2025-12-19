import apiClient from './axios';
import type { SignupRequest, SignupResponse, LoginRequest, LoginResponse, ProfileResponse, UpdateAccountRequest, UpdateAccountResponse } from '@/types/auth';


/**
 * Fetch current student profile
 */
export const getProfile = async (): Promise<ProfileResponse> => {
    try {
        const response = await apiClient.get<ProfileResponse>('/students/profile/');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch profile:', error);
        throw error;
    }
};

/**
 * Register a new student
 */
export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
    try {
        const response = await apiClient.post<SignupResponse>('/students/signup/', data);
        return response.data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
};

/**
 * Login a student
 */
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await apiClient.post<LoginResponse>('/students/login/', data);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};
/**
 * Update student account settings (identifier/email and password)
 */
export const updateAccount = async (data: UpdateAccountRequest): Promise<UpdateAccountResponse> => {
    try {
        const response = await apiClient.put<UpdateAccountResponse>('/students/account/update/', data);
        return response.data;
    } catch (error) {
        console.error('Account update failed:', error);
        throw error;
    }
};

/**
 * Check if a student identifier (email) is already taken
 * Returns true if the identifier is already in use, false otherwise
 */
export const checkIdentifierAvailability = async (identifier: string): Promise<boolean> => {
    try {
        const response = await apiClient.get('/students/lookup/', {
            params: { identifier }
        });
        return !!response.data.data;
    } catch (error) {
        console.error('Identifier lookup failed:', error);
        return false;
    }
};

