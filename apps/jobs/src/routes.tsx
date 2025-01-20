import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Auth0ClientProvider>
                <AppRoutingManager type="app-jobs" />
            </Auth0ClientProvider>
        ),
        errorElement: <div>App Jobs Error</div>,
        children: [
            {
                index: true,
                element: <div>jobs home</div>,
            },
        ],
    },
];
