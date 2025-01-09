import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";

// Define the routing configuration for the app-posting micro app
// app-posting 마이크로 앱의 라우팅 설정 정의
export const routes: RouteObject[] = [
    {
        path: "/", // Set the root path for the app-posting micro app
        element: <AppRoutingManager type="app-posting" />, // Render the AppRoutingManager component for app-posting
        errorElement: <div>App Posting Error</div>, // Render this element if there's an error in the route
        children: [
            {
                index: true, // Mark this route as the default route for the parent
                element: <div>App Posting Root</div>, // Display this component as the root of the app-posting micro app
            },
            {
                path: "1", // Define a route for /1
                element: <div>App Posting Page 1</div>, // Display this component for the /1 route
            },
        ],
    },
];
