export interface SignupRequest {
    identifier: string; // email
    password: string;
}

export interface SignupResponse {
    status: boolean;
    results: boolean;
    message: string;
    data: {
        access_token: string;
    } | null;
    error_code: string | null;
}

export interface LoginRequest {
    identifier: string; // email
    password: string;
}

export interface LoginResponse {
    status: boolean;
    results: boolean;
    message: string;
    data: {
        access_token: string;
    } | null;
    error_code: string | null;
}

export interface StudentProfile {
    uuid: string;
    email: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    // Add other profile fields as needed
}

export interface ProfileResponse {
    status: boolean;
    results: boolean;
    message: string;
    data: StudentProfile | null;
    error_code: string | null;
}
