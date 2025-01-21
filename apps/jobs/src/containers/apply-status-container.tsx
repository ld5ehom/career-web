import React, { useCallback } from "react";
import ApplyStatus from "../components/apply-status";
import { useDispatch, useSelector } from "react-redux";
import { done, fail, start } from "../redux/modules/applyStatus";
import useAuth0Client from "../hooks/use-auth0-client";
import { getApplyStatus } from "../apis";
import { AppDispatch, type RootState } from "../redux/create";

/**
 * ApplyStatusContainer Component
 * Fetches and manages the state of the user's job application status using Redux.
 * Redux를 사용하여 사용자의 구직 신청 상태를 가져오고 상태를 관리하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} The ApplyStatus component with fetched data (가져온 데이터와 함께 렌더링된 ApplyStatus 컴포넌트)
 */
const ApplyStatusContainer: React.FC = () => {
    // Auth0 client for handling authentication tokens (인증 토큰을 처리하기 위한 Auth0 클라이언트)
    const auth0Client = useAuth0Client();

    // Redux dispatcher for triggering actions (액션을 실행하기 위한 Redux 디스패처)
    const dispatch = useDispatch<AppDispatch>();

    // Selector to access the application status data from the Redux store
    // Redux 스토어에서 신청 상태 데이터를 가져오는 선택자
    const applyStatus = useSelector(
        (state: RootState) => state.applyStatus.data
    );

    /**
     * Function to fetch the user's application status
     * 사용자의 신청 상태를 가져오는 함수
     *
     * - Dispatches the `start` action to indicate loading
     * - Fetches the data using the Auth0 token and `getApplyStatus` API
     * - Dispatches the `done` action on success or `fail` action on error
     */
    const fetchApplyStatus = useCallback(async () => {
        try {
            dispatch(start()); // Indicate that the fetch has started (요청 시작 표시)
            const token = await auth0Client.getTokenSilently(); // Fetch the Auth0 token (Auth0 토큰 가져오기)
            const applyStatus = await getApplyStatus(token); // Fetch the application status (신청 상태 가져오기)
            dispatch(done(applyStatus)); // Dispatch success action with data (데이터와 함께 성공 액션 실행)
        } catch (error) {
            dispatch(fail(error)); // Dispatch failure action with error (에러와 함께 실패 액션 실행)
        }
    }, [dispatch, auth0Client]);

    return (
        // Render the ApplyStatus component with the fetched data and fetch function
        // 가져온 데이터와 fetch 함수를 사용하여 ApplyStatus 컴포넌트를 렌더링
        <ApplyStatus
            fetchApplyStatus={fetchApplyStatus}
            applyStatus={applyStatus}
        />
    );
};

export default ApplyStatusContainer;
