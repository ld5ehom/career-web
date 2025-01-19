import React from "react";
import { Button } from "@career-web/ui-kit";
import "./manage-connection.scss";

/**
 * ManageConnection Component
 * Displays a section for managing pending connection requests.
 * 대기 중인 1촌 신청을 관리하는 섹션을 표시합니다.
 */
const ManageConnection: React.FC = () => {
    return (
        <div className="wrapper">
            {/* Message indicating no pending connection requests */}
            {/* 대기 중인 1촌 신청이 없다는 메시지 */}
            <div>No pending connection requests</div>

            {/* Button for managing connections */}
            {/* 1촌 신청 관리를 위한 버튼 */}
            <div>
                <Button>Manage</Button>
            </div>
        </div>
    );
};

export default ManageConnection;
