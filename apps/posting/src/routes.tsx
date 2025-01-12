import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import PageHome from "./pages/page-home";

// Define the routing configuration for the app-posting micro app
// app-posting 마이크로 앱의 라우팅 설정 정의
export const routes: RouteObject[] = [
    {
        path: "/", // Set the root path for the app-posting micro app
        // Render the AppRoutingManager component for app-posting
        element: (
            <Auth0ClientProvider>
                <AppRoutingManager type="app-posting" />
            </Auth0ClientProvider>
        ),
        errorElement: <div>App Posting Error</div>, // Render this element if there's an error in the route
        children: [
            {
                index: true, // Mark this route as the default route for the parent
                element: <PageHome />,
            },
        ],
    },
];
