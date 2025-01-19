import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { connectionsAtom } from "../atoms";
import Connections from "../components/connections";
import useAuth0Client from "../hooks/use-auth0-client";
import { getConnections } from "../apis";

/**
 * ConnectionsContainer Component
 * Manages fetching and storing connections data using Recoil state.
 * Recoil 상태를 사용하여 연결 데이터를 가져오고 저장을 관리합니다.
 */
const ConnectionsContainer: React.FC = () => {
    // Initialize Auth0 client for authentication (인증을 위한 Auth0 클라이언트 초기화)
    const auth0Client = useAuth0Client();

    // Use Recoil state to manage connections data (Recoil 상태를 사용하여 연결 데이터 관리)
    const [connections, setConnections] = useRecoilState(connectionsAtom);

    /**
     * Function to fetch connections data from the API
     * API에서 연결 데이터를 가져오는 함수
     */
    const fetchConnections = useCallback(async () => {
        try {
            // Get a token silently and fetch the connections data
            // 토큰을 조용히 가져와 연결 데이터를 요청
            const token = await auth0Client.getTokenSilently();
            const connections = await getConnections(token);

            // Update the Recoil state with the fetched data
            // 가져온 데이터로 Recoil 상태 업데이트
            setConnections(connections);
        } catch (error) {
            alert(error); // Display an error message if fetching fails (가져오기 실패 시 오류 메시지 표시)
        }
    }, [auth0Client, setConnections]);

    return (
        // Render the Connections component with the state and fetch function
        // 상태와 가져오기 함수를 사용하여 Connections 컴포넌트 렌더링
        <Connections
            connections={connections}
            fetchConnections={fetchConnections}
        />
    );
};

export default ConnectionsContainer;
