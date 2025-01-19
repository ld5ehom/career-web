import React, { useEffect } from "react";
import {
    NetworkWrapper,
    ProfileContainer,
    ProfileTitle,
    LinksContainer,
    LinkList,
    LinkItem,
    Img,
    Name,
    Email,
} from "./my-network.styles";
import { type MyNetworkType } from "../types";

/**
 * MyNetwork Component
 * Displays the user's network management information, including connections, contacts, events, and pages.
 *
 * @param {MyNetworkType | null} myNetwork - The user's network data.
 * @param {() => Promise<void>} fetchMyNetwork - Function to fetch the user's network data.
 */
interface MyNetworkProps {
    myNetwork: MyNetworkType | null; // The user's network data.
    fetchMyNetwork: () => Promise<void>; // Function to fetch the user's network data.
}

const MyNetwork: React.FC<MyNetworkProps> = ({ myNetwork, fetchMyNetwork }) => {
    // Fetch the user's network data on component mount
    useEffect(() => {
        fetchMyNetwork();
    }, [fetchMyNetwork]);

    // If network data is not available, render nothing
    if (myNetwork === null) {
        return null;
    }

    // Destructure the network data for display
    const {
        connectionCount,
        contactCount,
        eventCount,
        pageCount,
        user: { picture, name, email },
    } = myNetwork;

    return (
        <NetworkWrapper>
            {/* Top area displaying the title */}
            <ProfileContainer>
                <ProfileTitle>Network Management</ProfileTitle>
                <Img src={picture} alt={`${name}'s profile`} />
                <Name>{name}</Name>
                <Email>{email}</Email>
            </ProfileContainer>

            {/* Links section displaying counts for connections, contacts, events, and pages */}
            <LinksContainer>
                <LinkList>
                    <div>Connections</div>
                    <LinkItem>{connectionCount}</LinkItem>
                </LinkList>
                <LinkList>
                    <div>Contacts</div>
                    <LinkItem>{contactCount}</LinkItem>
                </LinkList>
                <LinkList>
                    <div>Events</div>
                    <LinkItem>{eventCount}</LinkItem>
                </LinkList>
                <LinkList>
                    <div>Pages</div>
                    <LinkItem>{pageCount}</LinkItem>
                </LinkList>
            </LinksContainer>
        </NetworkWrapper>
    );
};

export default MyNetwork;
