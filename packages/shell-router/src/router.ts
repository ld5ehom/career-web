import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { type CreateRouterProps } from "./types";

// Define the Router type to encompass both browser and memory router instances
// 브라우저와 메모리 라우터 인스턴스를 포함하는 Router 타입 정의
type Router =
    | ReturnType<typeof createBrowserRouter>
    | ReturnType<typeof createMemoryRouter>;

// Create a router instance based on the provided type and configuration
// 제공된 유형과 설정에 따라 라우터 인스턴스 생성
export function createRouter({
    type,
    routes,
    basePath,
}: CreateRouterProps): Router {
    switch (type) {
        // Create a browser-based router with the provided routes
        // 제공된 라우트로 브라우저 기반 라우터 생성
        case "browser":
            return createBrowserRouter(routes);

        // Create a memory-based router with the provided routes and initial entries
        // 제공된 라우트와 초기 엔트리로 메모리 기반 라우터 생성
        case "memory":
            return createMemoryRouter(routes, {
                initialEntries: [basePath || "/"],
            });
    }
}
