import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import PageList from "./pages/page-list";
import PageDetail from "./pages/page-detail";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Auth0ClientProvider>
                <Layout>
                    <AppRoutingManager type="app-video" />
                </Layout>
            </Auth0ClientProvider>
        ),
        errorElement: <div>App Video Error</div>,
        children: [
            {
                index: true,
                element: <PageList />,
            },
            {
                path: ":id",
                element: <PageDetail />,
            },
        ],
    },
];
