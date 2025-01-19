import React, { useEffect } from "react";
import * as css from "./my-network.css";
import { type MyNetworkType } from "../types";

/**
 * MyNetwork Component
 * Displays the user's network management information, including connections, contacts, events, and pages.
 * 사용자 네트워크 관리 정보를 표시하며, 1촌, 연락처, 이벤트, 페이지 등의 정보를 포함합니다.
 */
interface MyNetworkProps {
    myNetwork: MyNetworkType | null; // The user's network data (사용자 네트워크 데이터)
    fetchMyNetwork: () => Promise<void>; // Function to fetch the user's network data (사용자 네트워크 데이터를 가져오는 함수)
}

const MyNetwork: React.FC<MyNetworkProps> = ({ myNetwork, fetchMyNetwork }) => {
    // Fetch the user's network data on component mount (컴포넌트가 마운트될 때 사용자 네트워크 데이터를 가져옵니다)
    useEffect(() => {
        fetchMyNetwork();
    }, [fetchMyNetwork]);

    // If network data is not available, render nothing (네트워크 데이터가 없으면 아무것도 렌더링하지 않음)
    if (myNetwork === null) {
        return null;
    }

    // Destructure the network data for display (표시를 위해 네트워크 데이터를 구조 분해)
    const {
        connectionCount,
        contactCount,
        eventCount,
        pageCount,
        user: { picture, name, email },
    } = myNetwork;

    return (
        <div>
            {/* Top area with the title (상단 영역: 제목 표시) */}
            <div className={css.topArea}>
                <span className={css.topAreaTitle}>Network Management</span>
            </div>

            {/* Links section displaying counts for connections, contacts, events, and pages */}
            {/* 링크 섹션: 커넥션, 연락처, 이벤트, 페이지의 개수를 표시 */}
            <div className={css.topAreaLinks}>
                <div className={css.topAreaLink}>
                    <div>Connections</div>
                    <div className={css.topAreaLinkCount}>
                        {connectionCount}
                    </div>
                </div>
                <div className={css.topAreaLink}>
                    <div>Contacts</div>
                    <div className={css.topAreaLinkCount}>{contactCount}</div>
                </div>
                <div className={css.topAreaLink}>
                    <div>Events</div>
                    <div className={css.topAreaLinkCount}>{eventCount}</div>
                </div>
                <div className={css.topAreaLink}>
                    <div>Pages</div>
                    <div className={css.topAreaLinkCount}>{pageCount}</div>
                </div>
            </div>

            {/* Bottom area displaying the user's profile details */}
            {/* 하단 영역: 사용자의 프로필 세부 정보를 표시 */}
            <div className={css.bottomArea}>
                <img
                    className={css.img}
                    src={picture}
                    alt={`${name}'s profile`}
                />
                <div className={css.name}>{name}</div>
                <div className={css.email}>{email}</div>
            </div>
        </div>
    );
};

export default MyNetwork;
