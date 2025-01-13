import { type User } from "@auth0/auth0-spa-js";

/**
 * API Request. server/db.json
 */
export interface PostType {
    id: number;
    message: string;
    createdAt: string;
    author: {
        email: string;
        name: string;
        picture: string;
    };
}

/**
 * Interface extending the User type from Auth0 to include additional fields.
 * 확장된 Auth0 User 타입으로 추가 필드를 포함합니다.
 */
export interface UserType extends User {
    view_count: number;
    update_count: number;
}
