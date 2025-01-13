import "./post.scss";

import React from "react";
import { Button } from "@career-web/ui-kit";

// Define the props interface for the Post component (Post 컴포넌트의 props 인터페이스 정의)
interface PostProps {
    id: number;
    author: {
        picture: string;
        name: string;
        email: string;
    };
    message: string;
    deletePostById: (id: number) => void; // Function to delete a post by its ID (게시물을 ID로 삭제하는 함수)
}

// Define the Post component (Post 컴포넌트 정의)
const Post: React.FC<PostProps> = ({ id, author, message, deletePostById }) => {
    // Handle delete button click (삭제 버튼 클릭 처리)
    const onDeleteClick = () => {
        deletePostById(id);
    };

    return (
        <div className="posting--post">
            {/* Profile section: Display author's profile picture and details (프로필 섹션: 작성자의 프로필 사진과 세부 정보 표시) */}
            <div className="posting--post-profile">
                <img src={author.picture} alt={`${author.name}'s profile`} />{" "}
                {/* Profile picture  */}
                <div className="posting--post-profile-text">
                    {/* Author's name  */}
                    <div className="posting--post-profile-name">
                        {author.name}
                    </div>{" "}
                    {/* Author's email  */}
                    <div className="posting--post-profile-email">
                        {author.email}
                    </div>{" "}
                </div>
            </div>

            {/* Message section: Display post content (메시지 섹션: 게시물 내용 표시) */}
            <div
                className="posting--post-message"
                dangerouslySetInnerHTML={{ __html: message }} // Render HTML content directly (HTML 콘텐츠 직접 렌더링)
            />

            {/* Actions section: Delete button (작업 섹션: 삭제 버튼) */}
            <div className="posting--post-actions">
                <Button onClick={onDeleteClick}>Delete</Button>{" "}
            </div>
        </div>
    );
};

export default Post;
