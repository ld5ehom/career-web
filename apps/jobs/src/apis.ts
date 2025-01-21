import { type ApplyStatusType, type JobType } from "./types";

/**
 * Fetches the list of jobs from the server.
 * 서버에서 채용 정보를 가져옵니다.
 *
 * @param {string} token - Authorization token (인증 토큰)
 * @returns {Promise<JobType[]>} - A promise that resolves to a list of jobs (채용 정보 배열을 반환하는 Promise)
 */
export async function getJobs(token: string): Promise<JobType[]> {
    const res = await fetch(`http://localhost:4000/jobs`, {
        headers: {
            Authorization: `Bearer ${token}`, // Include the authorization token in the request headers (요청 헤더에 인증 토큰 포함)
        },
    });

    return await res.json(); // Parse the JSON response (JSON 응답을 파싱하여 반환)
}

/**
 * Fetches the application status for the user.
 * 사용자의 지원 상태를 가져옵니다.
 *
 * @param {string} token - Authorization token (인증 토큰)
 * @returns {Promise<ApplyStatusType>} - A promise that resolves to the application status (지원 상태를 반환하는 Promise)
 */
export async function getApplyStatus(token: string): Promise<ApplyStatusType> {
    const res = await fetch("http://localhost:4000/apply-status", {
        headers: {
            Authorization: `Bearer ${token}`, // Include the authorization token in the request headers (요청 헤더에 인증 토큰 포함)
        },
    });

    return await res.json(); // Parse the JSON response (JSON 응답을 파싱하여 반환)
}
