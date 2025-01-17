import styled from "@emotion/styled";

/**
 * Styled component for the Video Course Contents section.
 * 비디오 강의 내용 섹션을 위한 스타일 컴포넌트
 */
export const CourseContentsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    .video--course-contents-goal {
        border-radius: 8px;
        background-color: white;
        padding: 16px;
        border: 1px solid rgb(0 0 0 / 0.1);
        flex: 1;

        h3 {
            color: black; /* Title color */
        }

        p {
            color: rgba(0, 0, 0, 0.6); /* Paragraph text color */
            font-size: 15px; /* Paragraph text size */
        }
    }

    .video--course-contents-summary {
        border-radius: 8px;
        background-color: white;
        padding: 16px;
        border: 1px solid rgb(0 0 0 / 0.1);
        flex: 1;

        h3 {
            color: black; /* Title color */
        }

        p {
            color: rgba(0, 0, 0, 0.6); /* Paragraph text color */
            font-size: 15px; /* Paragraph text size */
        }
    }
`;
