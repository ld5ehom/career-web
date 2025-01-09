import { type AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// This component sets up the Auth0 authentication context and handles redirection after authentication.
// 인증을 처리하고 인증 후 리디렉션을 관리하는 컴포넌트입니다.
export const Auth0ProviderWithNavigator: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    // Using the useNavigate hook from react-router-dom to handle redirection.
    // react-router-dom의 useNavigate 훅을 사용하여 리디렉션을 처리합니다.
    const navigate = useNavigate();

    // Getting Auth0 configuration values from environment variables.
    // 환경 변수에서 Auth0 설정 값을 불러옵니다.
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

    // Callback function that is called after redirection. It navigates the user to the previous page or the current pathname.
    // 리디렉션 후 사용자가 돌아갈 URL을 설정하는 콜백 함수입니다.
    const onRedirectCallback = (appState?: AppState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    // If the environment variables are not set properly, the component will not render.
    // 환경 변수가 설정되지 않았다면, 컴포넌트는 렌더링되지 않습니다.
    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        // Auth0Provider provides an authentication context and renders the children components if authenticated.
        // Auth0Provider는 인증 상태를 제공하고, 인증된 자식 컴포넌트를 렌더링합니다.
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri, // URL to redirect to after authentication. // 인증 후 리디렉션할 URL입니다.
            }}
            onRedirectCallback={onRedirectCallback} // The callback function to execute after the redirection. // 리디렉션 후 실행될 콜백 함수입니다.
        >
            {children}{" "}
            {/* Renders the child components. // 자식 컴포넌트를 렌더링합니다. */}
        </Auth0Provider>
    );
};
