import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { selectAtom } from "jotai/utils";
import { coursesAtom } from "../atoms";
import { useAtomValue } from "jotai";
import CourseDetailItem from "../components/course-detail-item";
import useAuth0Client from "../hooks/use-auth0-client";
import { getCourseContents } from "../apis";
import { type CourseContentsType } from "../types";
import CourseContents from "../components/course-contents";
import CourseActions from "../components/course-actions";

/**
 * PageDetail Component
 * Displays the detailed page of a selected video course.
 * 선택한 비디오 강의의 상세 페이지를 렌더링합니다.
 */
const PageDetail = () => {
    // Extract the course ID from the URL parameters (URL 파라미터에서 강의 ID 추출)
    const { id } = useParams<{ id: string }>();

    // Initialize the Auth0 client hook (Auth0 클라이언트 훅 초기화)
    const auth0Client = useAuth0Client();

    // State for storing course contents (강의 콘텐츠 상태 저장)
    const [courseContents, setCourseContents] =
        useState<CourseContentsType | null>(null);

    // Select the specific course from the coursesAtom
    // coursesAtom에서 특정 강의 선택
    const course = useAtomValue(
        useMemo(
            () =>
                selectAtom(coursesAtom, (courses) =>
                    courses.find((course) => course.id === Number(id))
                ),
            [id] // Updates when the ID changes (ID가 변경될 때마다 업데이트)
        )
    );

    // Fetch course content data when the course is loaded
    // 강의가 로드되면 강의 콘텐츠 데이터를 불러옴
    useEffect(() => {
        // If no course is found, stop (강의가 없으면 중단)
        if (course === undefined) {
            return;
        }

        (async () => {
            try {
                // Get the token and fetch course content
                // 토큰을 가져와 강의 콘텐츠 요청
                const token = await auth0Client.getTokenSilently();
                const courseContents = await getCourseContents(
                    token,
                    course.id
                );
                // Update course content state (강의 콘텐츠 상태 업데이트)
                setCourseContents(courseContents);
            } catch (error) {
                alert(error);
            }
        })();
    }, [auth0Client, course]);

    // If the course is not found, render nothing
    if (course === undefined) {
        return null;
    }

    return (
        <>
            {/* Render the course details 강의 상세 정보 렌더링 */}
            <CourseDetailItem {...course} />

            {/* Render course content if it exists  강의 콘텐츠가 존재하면 렌더링 */}
            {courseContents !== null && <CourseContents {...courseContents} />}

            {/* Render course action buttons 강의 관련 액션 버튼 렌더링 */}
            <CourseActions />
        </>
    );
};

export default PageDetail;
