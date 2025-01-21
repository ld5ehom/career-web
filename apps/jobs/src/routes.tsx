import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import create from "./redux/create";
import { Provider } from "react-redux";

const store = create();

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Provider store={store}>
                <Auth0ClientProvider>
                    <Layout>
                        <AppRoutingManager type="app-job" />
                    </Layout>
                </Auth0ClientProvider>
            </Provider>
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
