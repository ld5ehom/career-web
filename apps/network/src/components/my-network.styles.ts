import styled from "@emotion/styled";

export const NetworkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff; /* bg-white */
    padding: 16px 12px; /* px-3 py-4 */
    border-bottom-left-radius: 0.5rem; /* rounded-bl-lg */
    border-bottom-right-radius: 0.5rem; /* rounded-br-lg */
    gap: 8px; /* gap-2 */
    justify-content: center;
    align-items: center;
`;

export const ProfileTitle = styled.span`
    font-size: 1rem; /* text-base */
    font-weight: bold; /* font-bold */
    height: 1rem; /* h-4 */
    line-height: 1rem; /* leading-4 */
    margin-bottom: 1rem;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff; /* bg-white */
    padding: 8px 0; /* py-2 */
    border-bottom-width: 1px; /* border-b */
`;

export const TopAreaLinks = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff; /* bg-white */
    padding: 8px 0; /* py-2 */
    border-bottom-width: 1px; /* border-b */
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* justify-between */
    font-size: 1rem; /* text-base */
    color: #4b5563; /* text-gray-600 */
    padding: 8px 12px; /* py-2 px-3 */
    cursor: pointer;

    &:hover {
        background-color: #e5e7eb; /* bg-gray-200 */
    }
`;

export const LinkItem = styled.span`
    font-size: 1rem; /* text-base */
    color: #4b5563; /* text-gray-600 */
`;

export const Img = styled.img`
    width: 3rem; /* w-12 */
`;

export const Name = styled.div`
    font-size: 1rem; /* text-base */
    font-weight: bold; /* font-bold */
`;

export const Email = styled.div`
    font-size: 0.75rem; /* text-xs */
    color: #4b5563; /* text-gray-600 */
`;
