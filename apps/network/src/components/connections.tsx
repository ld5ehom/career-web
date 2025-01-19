import React, { useEffect } from "react";
import { type ConnectionType } from "../types";
import "./connections.scss";
import Connection from "./connection";

/**
 * Connections Component
 * Displays a list of connections fetched from the server and organized into a grid.
 * 서버에서 가져온 연결 목록을 그리드 형식으로 표시합니다.
 *
 * @param {ConnectionType[]} connections - List of connection data (연결 데이터 목록)
 * @param {() => Promise<void>} fetchConnections - Function to fetch connection data (연결 데이터를 가져오는 함수)
 */
interface ConnectionsProps {
    connections: ConnectionType[]; // Array of connection objects (연결 객체 배열)
    fetchConnections: () => Promise<void>; // Function to fetch the connections (연결 데이터를 가져오는 함수)
}

const Connections: React.FC<ConnectionsProps> = ({
    connections,
    fetchConnections,
}) => {
    // Fetch connections when the component is mounted
    // 컴포넌트가 마운트될 때 연결 데이터를 가져옵니다
    useEffect(() => {
        fetchConnections();
    }, [fetchConnections]);

    return (
        <div className="wrapper">
            {/* Title for the connection list section */}
            {/* 연결 목록 섹션의 제목 */}
            <div>People you may know from UCLA</div>

            {/* Render the list of connections */}
            {/* 연결 목록을 렌더링 */}
            <div className="connections">
                {connections.map((connection) => (
                    <Connection {...connection} key={connection.name} />
                ))}
            </div>
        </div>
    );
};

export default Connections;
