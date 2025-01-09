import { type RouteObject } from "react-router-dom";

// Router type ("browser" for BrowserRouter, "memory" for MemoryRouter)
// 라우터 유형 ("browser"는 BrowserRouter, "memory"는 MemoryRouter를 의미)
export type RouterType = "browser" | "memory";

// The type of router to create (browser or memory)
// 생성할 라우터의 유형 (browser 또는 memory)
export interface CreateRouterProps {
    // Array of route objects defining the application's routing structure
    // 애플리케이션의 라우팅 구조를 정의하는 라우트 객체 배열
    type: RouterType;

    // Array of route objects defining the application's routing structure
    // 애플리케이션의 라우팅 구조를 정의하는 라우트 객체 배열
    routes: RouteObject[];

    // Optional base path for all routes (모든 라우트의 기본 경로 (선택 사항))
    basePath?: string;
}
