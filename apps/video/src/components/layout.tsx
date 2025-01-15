import React, { useEffect } from "react";
import { LayoutWrapper } from "./layout.styles";
import { useSetAtom } from "jotai";
import { coursesAtom, userAtom } from "../atoms";
import useAuth0Client from "../hooks/use-auth0-client";
import { getCourses, getUser } from "../apis";
import ProfileContainer from "../containers/profile-container";
import MyCourseInfoContainer from "../containers/my-course-info-container";

/**
 * Layout component that structures the main page layout with profile and video information.
 * 프로필 및 비디오 정보를 포함한 메인 페이지 레이아웃을 구성하는 컴포넌트입니다.
 */
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const auth0Client = useAuth0Client(); // Auth0 클라이언트 인스턴스 가져오기
    const setUser = useSetAtom(userAtom); // 사용자 정보를 전역 상태에 저장
    const setCourses = useSetAtom(coursesAtom); // 비디오 목록을 전역 상태에 저장

    /**
     * Fetch user and video data on component mount.
     * 컴포넌트가 마운트될 때 사용자와 비디오 데이터를 불러옵니다.
     */
    useEffect(() => {
        (async () => {
            try {
                const token = await auth0Client.getTokenSilently(); // 인증 토큰 가져오기
                getUser(token).then(setUser); // 사용자 정보 불러오기 및 상태 업데이트
                getCourses(token).then(setCourses); // 비디오 정보 불러오기 및 상태 업데이트
            } catch (error) {
                alert(error);
            }
        })();
    }, [auth0Client, setCourses, setUser]);

    return (
        <LayoutWrapper>
            {/* Left Sidegbar : 프로필 및 비디오 정보 */}
            <div className="video--layout-left">
                <ProfileContainer />
                <MyCourseInfoContainer />
            </div>

            {/* Centern contents */}
            <div className="video--layout-center">{children}</div>
        </LayoutWrapper>
    );
};

export default Layout;
