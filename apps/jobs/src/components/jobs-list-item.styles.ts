import styled from "@emotion/styled";

export const JobsListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    gap: 16px;
    border-top: 1px solid rgb(0 0 0 / 0.1);
    cursor: pointer;

    .jobs--jobs-list-item-left {
    }

    .jobs--jobs-list-item-right {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .jobs--jobs-list-item-right-position {
            font-size: 18px;
            font-weight: 600;
            color: #0a66c2;
        }

        .jobs--jobs-list-item-right-location {
            color: rgba(0, 0, 0, 0.6);
            font-size: 15px;
        }
    }

    &:hover {
        .jobs--jobs-list-item-right-position {
            text-decoration: underline;
        }
    }
`;
