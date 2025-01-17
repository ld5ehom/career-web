import { useContext } from "react";
import { Auth0ClientContext } from "../providers/auth0-client-provider";

export default function useAuth0Client() {
    const auth0Client = useContext(Auth0ClientContext);

    // If `auth0Client` is null, it throws an error, indicating that the hook must be used inside `Auth0ClientProvider`.
    // `auth0Client`가 null이면 `Auth0ClientProvider` 내에서만 사용해야 한다는 오류를 던집니다.
    if (auth0Client === null) {
        throw new Error(
            "useAuth0Client must be used within Auth0ClientProvider"
        );
    }

    // Returns the `auth0Client` so that it can be used by other components.
    // `auth0Client`를 반환하여 다른 컴포넌트에서 사용할 수 있게 합니다.
    return auth0Client;
}
