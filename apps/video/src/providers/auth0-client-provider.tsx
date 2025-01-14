import React from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";

// Create Auth0ClientContext to manage Auth0Client globally (Auth0Client를 전역적으로 관리하기 위한 Auth0ClientContext 생성)
export const Auth0ClientContext = React.createContext<Auth0Client | null>(null);

const Auth0ClientProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    // Retrieve Auth0 settings from .env file (Auth0 설정을 .env 파일에서 가져옴)
    const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

    // Create an Auth0Client instance (Auth0Client 인스턴스를 생성)
    const auth0Client = new Auth0Client({
        domain,
        clientId,
        authorizationParams: {
            redirect_uri: redirectUri,
        },
    });

    return (
        // Provide the Auth0Client instance to child components (하위 컴포넌트에 Auth0Client 인스턴스를 전달)
        <Auth0ClientContext.Provider value={auth0Client}>
            {children}
        </Auth0ClientContext.Provider>
    );
};

export default Auth0ClientProvider;
