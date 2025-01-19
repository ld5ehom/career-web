import { type ConnectionType, type MyNetworkType } from "./types";

/**
 * Fetches the current user's network information.
 * 현재 사용자의 네트워크 정보를 가져옵니다.
 * @param {string} token - Authorization token (인증 토큰)
 * @returns {Promise<MyNetworkType>} - A promise resolving to the user's network information
 *                                      (사용자의 네트워크 정보를 반환하는 Promise)
 */
export async function getMyNetwork(token: string): Promise<MyNetworkType> {
    const res = await fetch("http://localhost:4000/my-network", {
        headers: {
            Authorization: `Bearer ${token}`, // Adds authorization token to the request headers (요청 헤더에 인증 토큰 추가)
        },
    });

    // Parses and returns the response as JSON (응답을 JSON으로 파싱 후 반환)
    return await res.json();
}

/**
 * Fetches a list of connections for the user.
 * 사용자의 연결된 목록을 가져옵니다.
 * @param {string} token - Authorization token (인증 토큰)
 * @returns {Promise<ConnectionType[]>} - A promise resolving to an array of connections
 *                                         (연결된 목록 배열을 반환하는 Promise)
 */
export async function getConnections(token: string): Promise<ConnectionType[]> {
    const res = await fetch("http://localhost:4000/connections", {
        headers: {
            Authorization: `Bearer ${token}`, // Adds authorization token to the request headers (요청 헤더에 인증 토큰 추가)
        },
    });

    // Parses and returns the response as JSON (응답을 JSON으로 파싱 후 반환)
    return await res.json();
}
