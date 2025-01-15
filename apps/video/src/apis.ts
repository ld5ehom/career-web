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
        "http://localhost:4000/videos?_sort=id&_order=desc",
        {
            headers: {
                Authorization: `Bearer ${token}`, // Authorization header with token (토큰을 포함한 인증 헤더)
            },
        }
    );

    return await res.json(); // Returns the video list (비디오 목록 반환)
}

/**
 * Fetches detailed content for a specific video.
 * 특정 비디오의 상세 콘텐츠를 불러옵니다.
 *
 * @param token - Authentication token (인증 토큰)
 * @param id - ID of the video (비디오 ID)
 * @returns A promise that resolves to the content of the video (비디오 콘텐츠를 반환하는 Promise)
 */
export async function getVideoContents(
    token: string,
    id: number
): Promise<CourseContentsType> {
    const res = await fetch(`http://localhost:4000/video-contents/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Authorization header with token (토큰을 포함한 인증 헤더)
        },
    });

    return await res.json(); // Returns the video content details (비디오 상세 정보 반환)
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
