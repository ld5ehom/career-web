import {
    type CourseContentsType,
    type CourseType,
    type UserType,
} from "./types";

/**
 * Fetches a list of videos from the server.
 * 서버에서 비디오 목록을 불러옵니다.
 *
 * @param token - Authentication token (인증 토큰)
 * @returns A promise that resolves to an array of VideoType (VideoType 배열을 반환하는 Promise)
 */
export async function getCourses(token: string): Promise<CourseType[]> {
    const res = await fetch(
        "http://localhost:4000/courses?_sort=id&_order=desc",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return await res.json();
}

/**
 * Fetches the detailed content of a specific course by ID.
 * 특정 강의의 상세 콘텐츠를 불러오는 함수
 *
 * @param token - Authentication token (인증 토큰)
 * @param id - The ID of the course to fetch details for (상세 정보를 불러올 강의 ID)
 * @returns A promise that resolves to CourseContentsType. (CourseContentsType 반환)
 */
export async function getCourseContents(
    token: string,
    id: number
): Promise<CourseContentsType> {
    const res = await fetch(`http://localhost:4000/course-contents/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await res.json();
}

/**
 * Fetches user information from the server.서버에서 사용자 정보를 불러옵니다.
 * server/index.js (Return user info at the /user endpoint)
 *
 * @param token - Authentication token (인증 토큰)
 * @returns A promise that resolves to user data (사용자 정보를 반환하는 Promise)
 */
export async function getUser(token: string): Promise<UserType> {
    const res = await fetch("http://localhost:4000/user", {
        headers: {
            Authorization: `Bearer ${token}`, // Authorization header with token (토큰을 포함한 인증 헤더)
        },
    });

    return await res.json(); // Returns the user data (사용자 정보 반환)
}
