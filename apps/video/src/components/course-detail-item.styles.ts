import styled from "@emotion/styled";

/**
 * Styled component for the Video Course Detail Item.
 * 비디오 코스 상세 항목을 위한 스타일 컴포넌트
 */
export const CourseDetailItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    gap: 16px;
    border: 1px solid rgb(0 0 0 / 0.1);

    /* Thumbnail section for the video course detail */
    .video--course-detail-item-thumbnail {
        flex: 1;
        width: 308px;
        height: 168px;

        img {
            width: 308px;
            height: 168px;
            border-radius: 8px;
        }
    }

    /* Info section for the video course detail */
    .video--course-detail-item-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        /* Title styling for the video course */
        .video--course-detail-item-info-title {
            font-size: 19px;
            font-weight: 600;
        }

        /* Description styling for the video course */
        .video--course-detail-item-info-description {
            color: rgba(0, 0, 0, 0.6);
            font-size: 15px;
        }
    }
`;
