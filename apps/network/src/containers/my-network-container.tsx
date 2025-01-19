import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { myNetworkAtom } from "../atoms";
import MyNetwork from "../components/my-network";
import useAuth0Client from "../hooks/use-auth0-client";
import { getMyNetwork } from "../apis";

/**
 * MyNetworkContainer Component
 * A container component responsible for fetching and managing the user's network data.
 * 사용자의 네트워크 데이터를 가져오고 관리하는 컨테이너 컴포넌트.
 */
const MyNetworkContainer: React.FC = () => {
    // Hook to interact with Auth0 client (Auth0 클라이언트와 상호작용하기 위한 훅)
    const auth0Client = useAuth0Client();

    // State management for the user's network data using Recoil (Recoil을 사용하여 사용자의 네트워크 데이터 상태 관리)
    const [myNetwork, setMyNetwork] = useRecoilState(myNetworkAtom);

    /**
     * Fetches the user's network data from the server and updates the state.
     * 서버에서 사용자의 네트워크 데이터를 가져와 상태를 업데이트합니다.
     */
    const fetchMyNetwork = useCallback(async () => {
        try {
            // Get the authentication token silently (인증 토큰을 조용히 가져옵니다)
            const token = await auth0Client.getTokenSilently();

            // Fetch the user's network data using the API (API를 사용하여 네트워크 데이터 가져오기)
            const myNetwork = await getMyNetwork(token);

            // Update the state with the fetched network data (가져온 데이터를 상태로 업데이트)
            setMyNetwork(myNetwork);
        } catch (error) {
            alert(error);
        }
    }, [auth0Client, setMyNetwork]);

    // Render the MyNetwork component with the current state and fetch function
    // 현재 상태와 데이터 가져오기 함수를 전달하여 MyNetwork 컴포넌트를 렌더링
    return <MyNetwork myNetwork={myNetwork} fetchMyNetwork={fetchMyNetwork} />;
};

export default MyNetworkContainer;
