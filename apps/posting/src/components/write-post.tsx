import "./write-post.scss";

import React, { useRef } from "react";
import { Button } from "@career-web/ui-kit";

// Define the WritePost component with a prop to handle post creation (포스트 생성을 처리하는 prop과 함께 WritePost 컴포넌트를 정의합니다)
interface WritePostProps {
    writePost: (message: string) => Promise<void>; // Function to write a post (포스트를 작성하는 함수)
}

const WritePost: React.FC<WritePostProps> = ({ writePost }) => {
    const messageRef = useRef<HTMLTextAreaElement>(null); // Reference to the textarea for message input (메시지 입력을 위한 텍스트 영역 참조)

    // Handler for post button click (포스트 버튼 클릭 시 처리 함수)
    const onWriteClick = async () => {
        if (messageRef.current) {
            // Replace line breaks with <br> and call writePost (줄 바꿈을 <br>로 변경하고 writePost 함수 호출)
            await writePost(
                messageRef.current.value.replace(/(?:\r\n|\r|\n)/g, "<br />")
            );
            // Clear the textarea after posting (포스트 후 텍스트 영역을 비웁니다)
            messageRef.current.value = "";
        }
    };

    return (
        <div className="posting--write-post">
            {/* Textarea for message input (메시지 입력을 위한 텍스트 영역) */}
            <textarea
                className="posting--write-post-textarea"
                ref={messageRef}
            />

            {/* Post button that triggers onWriteClick (onWriteClick을 트리거하는 포스트 버튼) */}
            <div className="posting--write-post-actions">
                <Button onClick={onWriteClick}>Post</Button>
            </div>
        </div>
    );
};

export default WritePost;
