import React from "react";
import { MyCourseInfoWrapper } from "./my-course-info.styles";
import { type UserType } from "../types";

interface MyCourseInfoProps {
    user: UserType | null;
}

/**
 * MyCourseInfo Component
 * Displays the user's course progress, including total courses, ongoing courses, and completed courses.
 * 사용자의 강좌 진행 상태(전체 강좌, 수강 중인 강좌, 완료한 강좌)를 표시하는 컴포넌트
 */
const MyCourseInfo: React.FC<MyCourseInfoProps> = ({ user }) => {
    // If user data is not available, render nothing.
    if (user === null) {
        return null;
    }

    const { courses } = user;

    return (
        <MyCourseInfoWrapper>
            {/* Top section displaying the title */}
            {/* 학습 현황 제목을 보여주는 상단 섹션 */}
            <div className="video--my-course-info-top">
                <span className="video--my-course-info-top-title">
                    My Course Status
                </span>
            </div>

            {/* Bottom section displaying course statistics */}
            {/* 강좌 통계를 보여주는 하단 섹션 */}
            <div className="video--my-course-info-bottom">
                {/* Total courses */}
                <div className="video--my-course-info-bottom-item">
                    <div>Total Courses</div>
                    <div className="video--my-course-info-bottom-item-count">
                        {courses.length}
                    </div>
                </div>

                {/* Ongoing courses */}
                <div className="video--my-course-info-bottom-item">
                    <div>In Progress</div>
                    <div className="video--my-course-info-bottom-item-count">
                        {courses.filter((course) => !course.done).length}
                    </div>
                </div>

                {/* Completed courses */}
                <div className="video--my-course-info-bottom-item">
                    <div>Completed</div>
                    <div className="video--my-course-info-bottom-item-count">
                        {courses.filter((course) => course.done).length}
                    </div>
                </div>
            </div>
        </MyCourseInfoWrapper>
    );
};

export default MyCourseInfo;
