import styled from "@emotion/styled";

export const JobsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    gap: 16px;
    border: 1px solid rgb(0 0 0 / 0.1);

    .jobs--jobs-list-top {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .jobs--jobs-list-top-title {
            font-size: 19px;
            font-weight: 600;
        }

        .jobs--jobs-list-top-subtitle {
            color: rgba(0, 0, 0, 0.6);
            font-size: 15px;
        }
    }
`;
