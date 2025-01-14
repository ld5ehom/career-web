import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-web/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    font-size: 100px;
`;

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Auth0ClientProvider>
                <AppRoutingManager type="app-video" />
            </Auth0ClientProvider>
        ),
        errorElement: <div>App Video Error</div>,
        children: [
            {
                index: true,
                element: <Wrapper>Video home</Wrapper>,
            },
        ],
    },
];
