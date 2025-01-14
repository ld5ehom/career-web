import React, { useEffect, useRef } from "react";
import inject from "video/injector";
import { useLocation } from "react-router-dom";
import { appVideoBasename } from "../constants/prefix";
import { useShellEvent } from "@career-web/shell-router";

export default function AppVideo() {
    // Create a reference to the wrapper div for the app-video micro app
    // app-video 마이크로 앱을 위한 wrapper div 참조 생성
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Get the current location (path) using React Router's useLocation
    // React Router의 useLocation을 사용하여 현재 경로 가져오기
    const location = useLocation();

    // Listen for shell events and handle navigation for app-video
    // app-video의 네비게이션을 처리하기 위해 shell 이벤트 리스닝
    useShellEvent("app-video", appVideoBasename);

    // Ref to track if this is the first run of the component
    // 컴포넌트의 첫 번째 실행 여부를 추적하는 Ref
    const isFirstRunRef = useRef(true);

    // Ref to store the unmount function
    // unmount 함수 저장을 위한 Ref
    const unmountRef = useRef(() => {});

    useEffect(() => {
        // Only run the injection process once, when the component first mounts
        // 컴포넌트가 처음 마운트될 때 한 번만 인젝션 프로세스 실행
        if (!isFirstRunRef.current) {
            return;
        }

        // Inject the micro app with memory router and basePath based on the current location
        // 현재 경로를 기반으로 memory 라우터와 basePath로 마이크로 앱을 인젝션
        unmountRef.current = inject({
            routerType: "memory",
            rootElement: wrapperRef.current!,
            basePath: location.pathname.replace(appVideoBasename, ""),
        });

        // Mark that the first run has completed (첫 번째 실행이 완료되었음을 표시)
        isFirstRunRef.current = false;
    }, [location]);

    // Cleanup function to unmount the app when the component is unmounted
    // 컴포넌트가 언마운트될 때 마이크로 앱을 언마운트하기 위한 클린업 함수
    useEffect(() => unmountRef.current, []);

    // Render the div that will contain the app-video micro app
    // app-video 마이크로 앱을 포함할 div를 렌더링
    return <div ref={wrapperRef} id="app-video" />;
}
