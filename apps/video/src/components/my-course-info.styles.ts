import styled from "@emotion/styled";

/**
 * Styled component for the Video Course Info section.
 * 비디오 강좌 정보 섹션을 위한 스타일 컴포넌트
 */
export const MyCourseInfoWrapper = styled.div`
    /* Top section for video course info */
    .video--my-course-info-top {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 16px 12px 16px;
        border-radius: 8px 8px 0 0;
        border-bottom: 1px solid rgb(0 0 0 / 0.1);
        gap: 10px;

        .video--my-course-info-top-title {
            font-size: 15px;
            font-weight: bold;
            height: 15px;
        }
    }

    /* Bottom section for video course info */
    .video--my-course-info-bottom {
        display: flex;
        flex-direction: column;
        padding: 16px 12px 16px;
        border-radius: 0 0 8px 8px;
        background-color: white;
        gap: 10px;

        .video--my-course-info-bottom-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: rgb(0 0 0/0.6);
            font-size: 14px;

            .video--my-course-info-bottom-item-count {
                color: #0a66c2;
                cursor: pointer;
            }
        }
    }
`;
