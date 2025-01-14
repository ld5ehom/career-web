import React, { Suspense } from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import { appVideoBasename, appPostingBasename } from "./constants/prefix";
import { Auth0ProviderWithNavigator } from "./components/auth0-provider-with-navigator";

// Lazy load the AppPosting component to optimize performance
// 성능 최적화를 위해 AppPosting 컴포넌트를 Lazy Loading으로 가져옴
const AppPostingLazy = React.lazy(() => import("./components/app-posting"));
const AppVideoLazy = React.lazy(() => import("./components/app-video"));

// Create the browser router with defined routes
// 정의된 경로로 브라우저 라우터 생성
const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Auth0ProviderWithNavigator>
                <Layout />
            </Auth0ProviderWithNavigator>
        ),
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                index: true,
                element: <Navigate to={`${appPostingBasename}`} />, // Redirect users to the appPostingBasename path
            },
            {
                path: `${appPostingBasename}/*`, // Define the dynamic route for app-posting
                element: (
                    // Suspense is used to show a fallback UI while AppPosting is loading
                    // AppPosting이 로딩되는 동안 fallback UI를 표시하기 위해 Suspense 사용
                    <Suspense fallback="Loading Posting...">
                        <AppPostingLazy />
                    </Suspense>
                ),
            },
            {
                path: `${appVideoBasename}/*`,
                element: (
                    <Suspense fallback="Loading Video...">
                        <AppVideoLazy />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default function Router() {
    // Render the RouterProvider with the defined browserRouter
    // 정의된 browserRouter로 RouterProvider를 렌더링
    return <RouterProvider router={browserRouter} />;
}
