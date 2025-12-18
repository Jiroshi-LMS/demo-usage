import apiClient from './axios';
import type { Course, ApiCoursesResponse, ApiCourseItem, CoursesResponse, ApiCourseDetailResponse, ApiLessonsResponse, Lesson, ApiLessonItem } from '@/types/course';

/**
 * Helper to format duration seconds to string
 */
export const formatDuration = (duration: string | number): string => {
    const durationSeconds = typeof duration === 'string' ? parseFloat(duration) : duration;
    if (isNaN(durationSeconds)) return '0 seconds';

    if (durationSeconds >= 3600) {
        return `${(durationSeconds / 3600).toFixed(3)} hours`;
    } else if (durationSeconds >= 60) {
        return `${Math.round(durationSeconds / 60)} minutes`;
    } else {
        return `${Math.round(durationSeconds)} seconds`;
    }
};

/**
 * Map API course item to our Course interface
 */
const mapApiCourse = (apiCourse: ApiCourseItem): Course => {
    return {
        id: apiCourse.uuid,
        title: apiCourse.title,
        description: apiCourse.description,
        thumbnail: apiCourse.thumbnail,
        duration: formatDuration(apiCourse.duration),
        createdAt: apiCourse.created_at,
        isEnrolled: apiCourse.is_enrolled,
        price: 0, // Default price, update if your API provides it
    };
};

/**
 * Map API lesson item to our Lesson interface
 */
const mapApiLesson = (apiLesson: ApiLessonItem): Lesson => {
    return {
        id: apiLesson.uuid,
        title: apiLesson.title,
        description: apiLesson.description,
        duration: formatDuration(apiLesson.duration),
        createdAt: apiLesson.created_at,
    };
};

/**
 * Fetch courses from the API with optional cursor for pagination
 * @param cursor - Optional cursor for pagination
 */
export const getCourses = async (cursor?: string, search?: string): Promise<CoursesResponse> => {
    try {
        const params: Record<string, string> = {};
        if (cursor) params.cursor = cursor;
        if (search) params.search = search;
        params.selections = "uuid,title,description,thumbnail,duration"
        const response = await apiClient.get<ApiCoursesResponse>('/courses/', { params });

        // Check if response is successful
        if (!response.data.status) {
            console.error('API returned error status');
            throw new Error(response.data.message || 'Failed to fetch courses');
        }

        // Extract courses from nested structure
        const apiCourses = response.data.data?.results || [];

        if (!Array.isArray(apiCourses)) {
            console.error('Results is not an array:', apiCourses);
            return {
                courses: [],
                nextCursor: null,
                previousCursor: null,
                hasMore: false,
            };
        }

        // Map API courses to our Course interface
        const courses = apiCourses.map(mapApiCourse);

        return {
            courses,
            nextCursor: response.data.data?.next_cursor || null,
            previousCursor: response.data.data?.previous_cursor || null,
            hasMore: !!response.data.data?.next_cursor,
        };
    } catch (error) {
        console.error('Failed to fetch courses:', error);
        throw error;
    }
};

/**
 * Fetch a single course by ID
 */
export const getCourseById = async (id: string | number): Promise<Course> => {
    try {
        const response = await apiClient.get<ApiCourseDetailResponse>(`/courses/${id}/`);
        if (!response.data.status || !response.data.data) {
            throw new Error(response.data.message || 'Failed to fetch course details');
        }
        return mapApiCourse(response.data.data);
    } catch (error) {
        console.error(`Failed to fetch course ${id}:`, error);
        throw error;
    }
};

/**
 * Fetch lessons for a specific course
 */
export const getCourseLessons = async (courseId: string | number): Promise<Lesson[]> => {
    try {
        const response = await apiClient.get<ApiLessonsResponse>(`/courses/${courseId}/lessons/`, {
            params: { pagination: 'page', selections: 'uuid,title,description,duration' }
        });

        if (!response.data.status) {
            console.error('API returned error status for lessons');
            return [];
        }

        const apiLessons = response.data.data?.results || [];
        return apiLessons.map(mapApiLesson);

    } catch (error) {
        console.error(`Failed to fetch lessons for course ${courseId}:`, error);
        return [];
    }
};

