import React from "react";
import { CourseActionsWrapper } from "./course-actions.styles";
import { Button } from "@career-web/ui-kit";

/**
 * Component for displaying action buttons related to the course.
 * 강의와 관련된 액션 버튼을 보여주는 컴포넌트
 */
const CourseActions: React.FC = () => {
    return (
        <CourseActionsWrapper>
            {/* Button to like the course */}
            {/* 강의를 좋아요 하는 버튼 */}
            <Button>Like this Course</Button>

            {/* Button to add the course to the user's list */}
            {/* 강의를 내 강의 목록에 추가하는 버튼 */}
            <Button>Add to My Course</Button>
        </CourseActionsWrapper>
    );
};

export default CourseActions;
