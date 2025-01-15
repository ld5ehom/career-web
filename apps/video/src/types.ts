import { type User } from "@auth0/auth0-spa-js";

export interface UserType extends User {
    view_count: number;
    update_count: number;
    courses: { courseId: number; done: false }[];
}

// Video Course type
export interface VideoType {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    contents?: string;
}

// Video course contents type
export interface VideoContentsType {
    id: number;
    goals: string[];
    summaries: string[];
}
