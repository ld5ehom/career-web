import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Custom hook for handling navigation events between the app and the shell
// 애플리케이션과 쉘 간의 네비게이션 이벤트를 처리하는 커스텀 훅
export default function useAppEvent(type: string) {
    // Function to programmatically navigate (프로그래밍 방식으로 네비게이션하는 함수)
    const navigate = useNavigate();

    // Current location object from React Router (React Router에서 현재 위치 객체 가져오기)
    const location = useLocation();

    useEffect(() => {
        // Event handler to manage navigation events dispatched from the shell application
        // 쉘 애플리케이션에서 디스패치된 네비게이션 이벤트를 처리하는 핸들러
        function shellNavigationHandler(event: Event) {
            // Extract the navigation path from the event
            // 이벤트에서 네비게이션 경로 추출
            const pathname = (event as CustomEvent<string>).detail;

            // If the current pathname is the same as the new one, do nothing
            // 현재 경로명이 새 경로명과 같으면 아무 작업도 하지 않음
            if (location.pathname === pathname) {
                return;
            }

            // Navigate to the new pathname (새 경로명으로 네비게이션)
            navigate(pathname);
        }

        // Add event listener for navigation events from the shell
        // 쉘에서 네비게이션 이벤트에 대한 이벤트 리스너 추가
        window.addEventListener(
            `[app-shell] navigated`,
            shellNavigationHandler
        );

        // Cleanup the event listener when the component unmounts
        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return () => {
            window.removeEventListener(
                `[app-shell] navigated`,
                shellNavigationHandler
            );
        };
    }, [location, navigate]); // Dependencies for the useEffect hook (useEffect 훅의 의존성)

    useEffect(() => {
        // Dispatch a custom navigation event to the shell when the location changes
        // 위치가 변경될 때 쉘로 사용자 정의 네비게이션 이벤트 디스패치
        window.dispatchEvent(
            // Send the current pathname as event detail
            // 현재 경로명을 이벤트 상세 정보로 전송
            new CustomEvent(`[${type}] navigated`, {
                detail: location.pathname,
            })
        );
    }, [location, type]); // Dependencies for the useEffect hook (useEffect 훅의 의존성)
}
