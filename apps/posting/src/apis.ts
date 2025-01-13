import { type UserType, type PostType } from "./types";

/**
 * Fetches the list of posts from the server.
 * 서버에서 게시물 목록을 가져옵니다.
 *
 * @param token - The authorization token for accessing the API (API 접근을 위한 인증 토큰)
 * @returns A promise resolving to an array of PostType (PostType 배열을 반환하는 Promise)
 */
export async function getPosts(token: string): Promise<PostType[]> {
    const res = await fetch(
        "http://localhost:4000/posts?_sort=id&_order=desc",
        {
            headers: {
                Authorization: `Bearer ${token}`, // Authorization header with Bearer token (Bearer 토큰을 포함한 인증 헤더)
            },
        }
    );
    return await res.json();
}

/**
 * Creates a new post by sending a POST request to the server.
 * 서버에 POST 요청을 보내 새 게시물을 생성합니다.
 *
 * @param token - The authorization token for accessing the API (API 접근을 위한 인증 토큰)
 * @param body - The request body containing the post message ({ message: string }) (게시물 메시지를 포함한 요청 본문)
 * @returns A promise that resolves when the request is complete (요청이 완료되면 resolve되는 Promise)
 */
export async function createPost(
    token: string,
    body: { message: string }
): Promise<void> {
    await fetch("http://localhost:4000/posts", {
        method: "POST", // HTTP POST method
        headers: {
            "Content-Type": "application/json", // Request body content type (요청 본문의 콘텐츠 타입)
            Authorization: `Bearer ${token}`, // Authorization header with Bearer token (Bearer 토큰을 포함한 인증 헤더)
        },
        body: JSON.stringify(body), // Convert body object to JSON string (본문 객체를 JSON 문자열로 변환)
    });
}

/**
 * Deletes a specific post by sending a DELETE request to the server.
 * 서버에 DELETE 요청을 보내 특정 게시물을 삭제합니다.
 *
 * @param token - The authorization token for accessing the API (API 접근을 위한 인증 토큰)
 * @param id - The ID of the post to be deleted (삭제할 게시물의 ID)
 * @returns A promise that resolves when the request is complete (요청이 완료되면 resolve되는 Promise)
 */
export async function removePost(token: string, id: number): Promise<void> {
    await fetch(`http://localhost:4000/posts/${id}`, {
        method: "DELETE", // HTTP DELETE method
        headers: {
            Authorization: `Bearer ${token}`, // Authorization header with Bearer token (Bearer 토큰을 포함한 인증 헤더)
        },
    });
}

/**
 * Fetches the user information from the server.
 * 서버에서 사용자 정보를 가져옵니다.
 *
 * @param token - The authorization token for accessing the API (API 접근을 위한 인증 토큰)
 * @returns A promise resolving to a UserType object (UserType 객체를 반환하는 Promise)
 */
/** 터미널에서 토큰정보 확인방법 
```
curl --location 'http://localhost:4000/user' \
--header 'Authorization: Bearer 토큰'
```
 */
export async function getUser(token: string): Promise<UserType> {
    const res = await fetch("http://localhost:4000/user", {
        headers: {
            Authorization: `Bearer ${token}`, // Authorization header with Bearer token (Bearer 토큰을 포함한 인증 헤더)
        },
    });
    return await res.json(); // Parse the response JSON (응답 JSON 파싱)
}
