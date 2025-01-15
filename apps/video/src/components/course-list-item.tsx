import React from "react";
import { CourseListItemWrapper } from "./course-list-item.styles";
import { useNavigate } from "react-router-dom";

/**
 * Props type for CourseListItem component.
 * 코스 목록 항목 컴포넌트의 Props 타입
 */
interface CourseListItemProps {
    id: number; // Course ID
    thumbnail: string; // Course thumbnail image URL
    title: string; // Course title
    description: string; // Course description
}

/**
 * Renders a course list item with thumbnail, title, and description.
 * 썸네일, 제목, 설명이 포함된 코스 목록 항목을 렌더링합니다.
 */
const CourseListItem: React.FC<CourseListItemProps> = ({
    id,
    title,
    thumbnail,
    description,
}) => {
    const navigate = useNavigate();

    /**
     * Navigate to the course detail page when the item is clicked.
     * 항목 클릭 시 코스 상세 페이지로 이동합니다.
     */
    const onClick = () => {
        navigate(`${id}`);
    };

    return (
        <CourseListItemWrapper onClick={onClick}> 
            {/* Course Thumbnail (코스 썸네일) */}
            <div className="video--course-list-item-thumbnail">
                <img src={thumbnail} alt={`${title} Thumbnail`} />
            </div>

            {/* Course Information (코스 정보) */}
            <div className="video--course-list-item-info">
                <div className="video--course-list-item-info-title">
                    {title}
                </div>
                <div
                    className="video--course-list-item-info-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </CourseListItemWrapper>
    );
};

export default CourseListItem;
