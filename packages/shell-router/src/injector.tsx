import { createRoot } from "react-dom/client";
import { RouteObject, RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

// Define the type for the router (browser or memory)
// 라우터의 유형 정의 (browser 또는 memory)
export type RouterType = "browser" | "memory";

// Factory function to inject a router and render the application
// 라우터를 주입하고 애플리케이션을 렌더링하는 팩토리 함수
function injectFactory({ routes }: { routes: RouteObject[] }) {
    return ({
        rootElement,
        basePath,
        routerType,
    }: {
        // The root DOM element where the application will be mounted
        // 애플리케이션이 마운트될 루트 DOM 요소
        rootElement: HTMLElement;

        // Optional base path for the router (라우터의 선택적 기본 경로)
        basePath?: string;

        // Type of the router (browser or memory)
        routerType: RouterType;
    }) => {
        // Create a router instance using the provided type, routes, and base path
        // 제공된 유형, 라우트, 기본 경로를 사용하여 라우터 인스턴스 생성
        const router = createRouter({
            type: routerType,
            routes,
            basePath,
        });

        // Create a React root and render the application with the router
        // React 루트를 생성하고 라우터와 함께 애플리케이션 렌더링
        const root = createRoot(rootElement);
        root.render(<RouterProvider router={router} />);

        // Return a cleanup function to unmount the root
        // 루트를 언마운트하는 정리 함수 반환
        return () => queueMicrotask(() => root.unmount());
    };
}

export { injectFactory };
