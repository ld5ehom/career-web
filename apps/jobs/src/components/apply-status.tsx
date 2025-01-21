import React, { useEffect } from "react";
import { ApplyStatusWrapper } from "./apply-status.styles";
import { type ApplyStatusType } from "../types";

/**
 * ApplyStatus Component
 * Displays the user's application status, including jobs, online classes, and saved updates.
 * 사용자의 지원 상태를 표시하며, 채용공고, 온라인 클래스, 저장된 업데이트를 포함합니다.
 *
 * @param {() => Promise<void>} fetchApplyStatus - Function to fetch application status (신청 상태 데이터를 가져오는 함수)
 * @param {ApplyStatusType | null} applyStatus - The fetched application status data (가져온 신청 상태 데이터)
 * @returns {JSX.Element} The ApplyStatus component (신청 상태 컴포넌트)
 */
interface ApplyStatusProps {
    fetchApplyStatus: () => Promise<void>; // Function to fetch application status (신청 상태 데이터를 가져오는 함수)
    applyStatus: ApplyStatusType | null; // The fetched application status data (가져온 신청 상태 데이터)
}

const ApplyStatus: React.FC<ApplyStatusProps> = ({
    fetchApplyStatus,
    applyStatus,
}) => {
    // Fetch the application status data when the component mounts
    // 컴포넌트가 마운트될 때 신청 상태 데이터를 가져옵니다
    useEffect(() => {
        fetchApplyStatus();
    }, [fetchApplyStatus]);

    // Display a loading message while fetching data
    // 데이터를 가져오는 동안 로딩 메시지를 표시
    if (applyStatus === null) {
        return <div>Loading...</div>;
    }

    return (
        <ApplyStatusWrapper>
            {/* Top area displaying the title */}
            <div className="jobs--apply-status-top">
                <span className="jobs--apply-status-top-title">My Status</span>
            </div>

            {/* Bottom area displaying application status counts */}
            {/* 하단 영역: 신청 상태 개수를 표시 */}
            <div className="jobs--apply-status-bottom">
                <div className="jobs--apply-status-bottom-item">
                    <div>My Jobs</div>
                    <div className="jobs--apply-status-bottom-item-count">
                        {applyStatus.myJobsCount}
                    </div>
                </div>
                <div className="jobs--apply-status-bottom-item">
                    <div>My Courses</div>
                    <div className="jobs--apply-status-bottom-item-count">
                        {applyStatus.myOnlineClassesCount}
                    </div>
                </div>
                <div className="jobs--apply-status-bottom-item">
                    <div>Saved Jobs</div>
                    <div className="jobs--apply-status-bottom-item-count">
                        {applyStatus.mySavedUpdatesCount}
                    </div>
                </div>
            </div>
        </ApplyStatusWrapper>
    );
};

export default ApplyStatus;
