import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Custom hook for handling navigation events between micro apps and the shell application
// 마이크로 앱과 쉘 애플리케이션 간의 네비게이션 이벤트를 처리하는 커스텀 훅
export default function useShellEvent(type: string, basename: string) {
    // Current location object from React Router (React Router에서 현재 위치 객체 가져오기)
    const location = useLocation();

    // Function to programmatically navigate (프로그래밍 방식으로 네비게이션하는 함수)
    const navigate = useNavigate();

    useEffect(() => {
        // Event handler to manage navigation events dispatched from the shell or micro apps
        // 쉘 또는 마이크로 앱에서 디스패치된 네비게이션 이벤트를 처리하는 핸들러
        const appNavigationEventHandler = (event: Event) => {
            // Extract the navigation path from the event (이벤트에서 네비게이션 경로 추출)
            const pathname = (event as CustomEvent<string>).detail;

            // Build the new pathname based on the basename (basename을 기반으로 새 경로명 생성)
            const newPathname =
                pathname === "/" ? basename : `${basename}${pathname}`;

            // If the new pathname matches the current one, do nothing
            // 새 경로명이 현재 경로명과 동일하면 아무 작업도 하지 않음
            if (newPathname === location.pathname) {
                return;
            }

            // Navigate to the new pathname (새 경로명으로 네비게이션)
            navigate(newPathname);
        };

        // Add event listener for navigation events
        // 네비게이션 이벤트에 대한 이벤트 리스너 추가
        window.addEventListener(
            `[${type}] navigated`,
            appNavigationEventHandler
        );

        // Cleanup the event listener when the component unmounts
        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return () => {
            window.removeEventListener(
                `[${type}] navigated`,
                appNavigationEventHandler
            );
        };
    }, [basename, location, navigate, type]); // Dependencies for the useEffect hook (useEffect 훅의 의존성)

    useEffect(() => {
        // Dispatch a navigation event from the shell when the location changes
        // 위치가 변경될 때 쉘에서 네비게이션 이벤트 디스패치
        if (location.pathname.startsWith(basename)) {
            window.dispatchEvent(
                // Strip the basename from the pathname (경로명에서 basename 제거)
                new CustomEvent("[app-shell] navigated", {
                    detail: location.pathname.replace(basename, ""),
                })
            );
        }
    }, [basename, location]); // Dependencies for the useEffect hook (useEffect 훅의 의존성)
}
