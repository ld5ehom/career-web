import React from "react";
import "./connection.scss";
import { Button } from "@career-web/ui-kit";
import IconDefault from "../assets/icon-default";

/**
 * Connection Component
 * Renders an individual connection card with profile details and action buttons.
 * 개별 연결 카드에 프로필 세부 정보와 액션 버튼을 렌더링합니다.
 *
 * @param {string} name - The name of the connection (연결된 사람의 이름)
 * @param {string | null} picture - The profile picture URL or null if not available (프로필 사진 URL 또는 null)
 * @param {string} role - The role or job title of the connection (연결된 사람의 역할 또는 직책)
 * @param {number} networkCount - The number of mutual connections (공통 1촌의 수)
 */
interface ConnectionProps {
    name: string; // Name of the connection (연결된 사람의 이름)
    picture: string | null; // Profile picture URL or null if not available (프로필 사진 URL 또는 null)
    role: string; // Role or job title (역할 또는 직책)
    networkCount: number; // Number of mutual connections (공통 1촌의 수)
}

const Connection: React.FC<ConnectionProps> = ({
    name,
    picture,
    role,
    networkCount,
}) => {
    return (
        <div className="wrapper">
            {/* Profile picture or default icon */}
            <div>
                {picture === null && <IconDefault />}
                {picture !== null && (
                    <img
                        className="picture"
                        src={picture}
                        alt={`${name}'s profile`}
                    />
                )}
            </div>

            {/* Connection name */}
            <div className="name">{name}</div>

            {/* Connection role */}
            <div className="role">{role}</div>

            {/* Number of mutual connections */}
            <div className="network-count">
                Mutual Connections: {networkCount}
            </div>

            {/* Action button */}
            <div>
                <Button>Add Connection</Button>
            </div>
        </div>
    );
};

export default Connection;
