import "./page-home.scss";

import React, { useEffect, useState } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import Profile from "../components/profile";
import { PostType } from "../types";
import { createPost, getPosts, removePost } from "../apis";
import Post from "../components/post";
import WritePost from "../components/write-post";

// PageHome component
const PageHome: React.FC = () => {
    const auth0Client = useAuth0Client(); // Initialize Auth0 client (Auth0 클라이언트 초기화)
    const [posts, setPosts] = useState<PostType[]>([]); // Manage posts state (게시물 상태 관리)

    // Run effect when component is mounted (컴포넌트가 마운트될 때 실행되는 효과)
    useEffect(() => {
        (async () => {
            try {
                const token = await auth0Client.getTokenSilently(); // Get token from Auth0
                const posts = await getPosts(token); // Fetch posts list
                setPosts(posts); // Update state with posts
            } catch (error) {
                alert(error);
            }
        })();
    }, [auth0Client]); // Trigger effect when auth0Client changes (auth0Client가 변경될 때만 실행)

    // Function to delete a specific post by ID (특정 게시물을 삭제하는 함수)
    const deletePostById = async (id: number) => {
        try {
            const token = await auth0Client.getTokenSilently(); // Get token from Auth0
            await removePost(token, id); // Request to delete post
            const posts = await getPosts(token); // Fetch updated posts list
            setPosts(posts); // Update state with new posts
        } catch (error) {
            alert(error);
        }
    };

    // Function to create a new post (새 게시물을 작성하는 함수)
    const writePost = async (message: string) => {
        try {
            const token = await auth0Client.getTokenSilently(); // Get token from Auth0
            await createPost(token, { message }); // Request to create new post
            const posts = await getPosts(token); // Fetch updated posts list
            setPosts(posts); // Update state with new posts
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="posting--page-home">
            {/* Left section: Display profile (왼쪽 영역: 프로필 표시) */}
            <div className="posting--page-home-left">
                <Profile />
            </div>

            {/* Center section: Write and display posts (중앙 영역: 게시물 작성 및 표시) */}
            <div className="posting--page-home-center">
                {/* Write post component (게시물 작성 컴포넌트) */}
                <WritePost writePost={writePost} />
                {/* Post list (게시물 목록) */}
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        {...post}
                        deletePostById={deletePostById}
                    />
                ))}
            </div>

            {/* Right section: Empty space (오른쪽 영역: 빈 공간) */}
            <div className="posting--page-home-right"></div>
        </div>
    );
};

export default PageHome;
