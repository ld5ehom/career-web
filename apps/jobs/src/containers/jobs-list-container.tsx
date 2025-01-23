import React, { useCallback } from "react";
import JobsList from "../components/jobs-list";
import { useDispatch, useSelector } from "react-redux";
import useAuth0Client from "../hooks/use-auth0-client";
import { type AppDispatch, type RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/jobs";
import { getJobs } from "../apis";

/**
 * JobsListContainer Component
 * Manages the state and data fetching logic for the job list and passes the data to the JobsList component.
 * 잡 리스트의 상태와 데이터 가져오기 로직을 관리하며, 데이터를 JobsList 컴포넌트에 전달합니다.
 */
const JobsListContainer: React.FC = () => {
    const auth0Client = useAuth0Client(); // Auth0 클라이언트 가져오기
    const dispatch = useDispatch<AppDispatch>(); // Redux 디스패치 함수 가져오기
    const jobs = useSelector((state: RootState) => state.jobs.data); // Redux 상태에서 잡 데이터 가져오기

    /**
     * Fetch jobs data from the API
     * API에서 잡 데이터를 가져오는 함수
     */
    const fetchJobs = useCallback(async () => {
        try {
            dispatch(start()); // Loading 시작
            const token = await auth0Client.getTokenSilently(); // 인증 토큰 가져오기
            const applyStatus = await getJobs(token); // 잡 데이터 가져오기
            dispatch(done(applyStatus)); // 성공적으로 데이터를 가져왔을 때 상태 업데이트
        } catch (error) {
            dispatch(fail(error));
        }
    }, [dispatch, auth0Client]);

    // Pass jobs data and fetchJobs function to the JobsList component
    // 잡 데이터와 fetchJobs 함수를 JobsList 컴포넌트에 전달
    return <JobsList jobs={jobs} fetchJobs={fetchJobs} />;
};

export default JobsListContainer;
