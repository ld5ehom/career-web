import React from "react";
import { ProfileWrapper } from "./profile.styles";
import { type UserType } from "../types";

/**
 * Props for the Profile component.
 * Profile 컴포넌트의 Props 타입 정의
 */
interface ProfileProps {
    user: UserType | null; // User data or null (사용자 정보 또는 null)
}

/**
 * Profile component to display user information.
 * 사용자 정보를 표시하는 프로필 컴포넌트
 */
const Profile: React.FC<ProfileProps> = ({ user }) => {
    // If no user data is available, render nothing.
    // 사용자 정보가 없으면 아무것도 렌더링하지 않습니다.
    if (user === null) {
        return null;
    }

    // Destructure user data.
    // 사용자 데이터를 구조 분해 할당합니다.
    const { picture, name, email, view_count, update_count } = user;

    return (
        <ProfileWrapper>
            {/* Top section: Profile picture, name, and email */}
            <div className="video--profile-top">
                {/* 사용자 프로필 사진 */}
                <img src={picture} alt={`${name}'s profile`} />{" "}
                {/* 사용자 이름 */}
                <div className="video--profile-name">{name}</div>{" "}
                {/* 사용자 이메일 */}
                <div className="video--profile-email">{email}</div>{" "}
            </div>

            {/* Bottom section: Profile views and update exposure */}
            {/* 하단 영역: 프로필 조회수 및 업데이트 노출 수 */}
            <div className="video--profile-bottom">
                <div className="video--profile-bottom-item">
                    {/* 프로필 조회자 */}
                    <div>Profile Views</div>
                    {/* 조회수 */}
                    <div className="video--profile-bottom-item-count">
                        {view_count}
                    </div>{" "}
                </div>
                <div className="video--profile-bottom-item">
                    <div>Update Exposure</div> {/* 업데이트 노출 */}
                    {/* 노출 수 */}
                    <div className="video--profile-bottom-item-count">
                        {update_count}
                    </div>{" "}
                </div>
            </div>
        </ProfileWrapper>
    );
};

export default Profile;
