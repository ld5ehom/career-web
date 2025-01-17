import React from "react";
import { CourseContentsWrapper } from "./course-contents.styles";

interface CourseDetailItemProps {
    id: number;
    goals: string[];
    summaries: string[];
}

/**
 * Component for displaying course goals and summaries.
 * 강의 목표 및 요약 정보를 보여주는 컴포넌트
 */
const CourseContents: React.FC<CourseDetailItemProps> = ({
    goals,
    summaries,
}) => {
    return (
        <CourseContentsWrapper>
            {/* Section for displaying course goals */}
            {/* 강의 목표를 보여주는 섹션 */}
            <div className="video--course-contents-goal">
                {/* 강의 목표 제목 */}
                <h3>Course Goals</h3>

                {/* 각 목표를 렌더링 */}
                {goals.map((goal, index) => (
                    <p key={index}>{goal}</p>
                ))}
            </div>

            {/* Section for displaying course summaries */}
            {/* 강의 요약을 보여주는 섹션 */}
            <div className="video--course-contents-summary">
                {/* 강의 요약 제목 */}
                <h3>Course Summary</h3>

                {/* 각 목표를 렌더링 */}
                {summaries.map((summary, index) => (
                    <p key={index}>{summary}</p>
                ))}
            </div>
        </CourseContentsWrapper>
    );
};

export default CourseContents;
