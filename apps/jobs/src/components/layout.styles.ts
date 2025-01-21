import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin: 0 auto;
    max-width: 1128px;
    padding: 16px;

    .jobs--layout-apply-status {
        display: flex;
        flex-direction: column;
        width: 225px;
        gap: 10px;
    }

    .jobs--layout-children {
        display: flex;
        flex-direction: column;
        width: 879px;
        gap: 10px;
    }
`;
