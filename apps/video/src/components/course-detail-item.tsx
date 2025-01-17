import React from "react";
import { CourseDetailItemWrapper } from "./course-detail-item.styles";

interface CourseDetailItemProps {
    thumbnail: string; // Thumbnail image URL (썸네일 이미지 URL)
    title: string; // Course title (강의 제목)
    description: string; // Course description (강의 설명)
}

/**
 * Component to display the detailed view of a video course.
 * 비디오 강의의 상세 정보를 보여주는 컴포넌트
 */
const CourseDetailItem: React.FC<CourseDetailItemProps> = ({
    title,
    thumbnail,
    description,
}) => {
    return (
        <CourseDetailItemWrapper>
            {/* Thumbnail section for the video course (비디오 강의 썸네일 섹션) */}
            <div className="video--course-detail-item-thumbnail">
                <img src={thumbnail} alt={title} />
            </div>

            {/* Information section for the video course (비디오 강의 정보 섹션) */}
            <div className="video--course-detail-item-info">
                {/* Video course title (비디오 강의 제목) */}
                <div className="video--course-detail-item-info-title">
                    {title}
                </div>

                {/* Video course description (비디오 강의 설명) */}
                <div
                    className="video--course-detail-item-info-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </CourseDetailItemWrapper>
    );
};

export default CourseDetailItem;
