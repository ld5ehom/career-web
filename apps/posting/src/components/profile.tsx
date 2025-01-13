import "./profile.scss";

import React, { useEffect, useState } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import { getUser } from "../apis";
import { type UserType } from "../types";

// Define the Profile component (Profile 컴포넌트를 정의합니다)
const Profile = () => {
    // Get the Auth0 client instance (Auth0 클라이언트 인스턴스를 가져옵니다)
    const auth0Client = useAuth0Client();

    // State to store user information
    const [user, setUser] = useState<UserType | null>(null);

    // Fetch user data on component mount (컴포넌트가 마운트될 때 사용자 데이터를 가져옵니다)
    useEffect(() => {
        (async () => {
            try {
                // Get an authorization token
                const token = await auth0Client.getTokenSilently();

                // Fetch user data using the token (토큰을 사용하여 사용자 데이터를 가져옵니다)
                const user = await getUser(token);

                // Update the state with the fetched user data (가져온 사용자 데이터로 상태를 업데이트합니다)
                setUser(user);
            } catch (error) {
                alert(error); // Display an error alert if fetching fails
            }
        })();
    }, [auth0Client]); // Run effect whenever the Auth0 client changes (Auth0 클라이언트가 변경될 때마다 이 효과를 실행합니다)

    // If no user data is available, render nothing
    if (user === null) {
        return null;
    }

    // Render the user's profile information
    return (
        <div className="posting--profile">
            {/* Top section: Display user's basic information (상단 섹션: 사용자의 기본 정보를 표시합니다) */}
            <div className="posting--profile-top">
                {/* User's profile picture (사용자의 프로필 사진) */}
                <img src={user.picture} alt={`${user.name}'s profile`} />{" "}
                {/* User's name (사용자의 이름) */}
                <div className="posting--profile-name">{user.name}</div>{" "}
                {/* User's email (사용자의 이메일) */}
                <div className="posting--profile-email">{user.email}</div>{" "}
            </div>

            {/* Bottom section: Display additional user stats (하단 섹션: 추가 사용자 통계를 표시합니다) */}
            <div className="posting--profile-bottom">
                {/* profile views */}
                <div className="posting--profile-bottom-item">
                    <div>Profile views</div>{" "}
                    {/* User's profile view count (사용자의 프로필 조회수) */}
                    <div className="posting--profile-bottom-item-count">
                        {user.view_count}{" "}
                    </div>
                </div>

                {/*  Search appearance (업데이트 노출) */}
                <div className="posting--profile-bottom-item">
                    <div>Search appearance</div>{" "}
                    {/* User's Search appearance count (사용자의 업데이트 노출 수) */}
                    <div className="posting--profile-bottom-item-count">
                        {user.update_count}{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
