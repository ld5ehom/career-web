import React from "react";

/**
 * IconDefault Component
 * This component renders the UCLA logo as a default icon.
 * 이 컴포넌트는 UCLA 로고를 기본 아이콘으로 렌더링합니다.
 */
const IconDefault: React.FC = () => (
    <img
        src="/ucla-logo-180.png"
        alt="Default UCLA Logo"
        width="48"
        height="48"
        style={{
            borderRadius: "50%",
            border: "2px solid #FC1C49",
            objectFit: "cover",
        }}
    />
);

export default IconDefault;
