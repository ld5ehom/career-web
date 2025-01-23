import React from "react";
import { JobsListItemWrapper } from "./jobs-list-item.styles";
import IconDefault from "../assets/icon-default";
import { useNavigate } from "react-router-dom";

/**
 * JobsListItem Component
 * Renders an individual job listing item with company, position, and location details.
 * 회사명, 직책, 위치 정보와 함께 개별 채용 공고 항목을 렌더링합니다.
 *
 * @param {number} id - The unique identifier for the job listing (채용 공고의 고유 ID)
 * @param {string} company - The name of the company offering the job (채용 회사 이름)
 * @param {string} position - The job position being advertised (채용 직책)
 * @param {string} location - The location of the job (채용 위치)
 */
interface JobsListItemProps {
    id: number; // Unique job ID (고유 채용 ID)
    company: string; // Company name (회사 이름)
    position: string; // Job position (채용 직책)
    location: string; // Job location (채용 위치)
}

const JobsListItem: React.FC<JobsListItemProps> = ({
    id,
    company,
    position,
    location,
}) => {
    const navigate = useNavigate();

    /**
     * Handles click event for navigating to the job details page
     * 채용 상세 페이지로 이동하는 클릭 이벤트를 처리합니다.
     */
    const onClick = () => {
        navigate(`/${id}`, {}); // Navigate to the job detail page using the job ID
    };

    return (
        <JobsListItemWrapper onClick={onClick}>
            {/* Left section with the default icon */}
            {/* 왼쪽 섹션: 기본 아이콘 */}
            <div className="jobs--jobs-list-item-left">
                <IconDefault />
            </div>

            {/* Right section displaying job details */}
            {/* 오른쪽 섹션: 채용 세부 정보 표시 */}
            <div className="jobs--jobs-list-item-right">
                <div className="jobs--jobs-list-item-right-position">
                    {position}
                </div>
                <div className="jobs--jobs-list-item-right-company">
                    {company}
                </div>
                <div className="jobs--jobs-list-item-right-location">
                    {location}
                </div>
            </div>
        </JobsListItemWrapper>
    );
};

export default JobsListItem;
