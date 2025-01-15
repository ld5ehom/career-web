import styled from "@emotion/styled";

/**
 * Styled component for the Video Course List Item.
 * 비디오 코스 목록 항목을 위한 스타일 컴포넌트
 */
export const CourseListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    gap: 16px;
    border: 1px solid rgb(0 0 0 / 0.1);

    /* Thumbnail section for the video course item */
    .video--course-list-item-thumbnail {
        flex: 1;
        width: 208px;
        height: 168px;

        img {
            width: 208px;
            height: 168px;
            border-radius: 8px;
        }
    }

    /* Info section for the video course item */
    .video--course-list-item-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        /* Title styling for the video course */
        .video--course-list-item-info-title {
            font-size: 19px;
            font-weight: 600;
        }

        /* Description styling for the video course */
        .video--course-list-item-info-description {
            color: rgba(0, 0, 0, 0.6);
            font-size: 15px;
        }
    }

    /* Hover effect for the video course item */
    &:hover {
        border: 1px solid rgb(0 0 0 / 0.6);
        cursor: pointer;
    }
`;
