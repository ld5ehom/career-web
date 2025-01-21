import { createSlice } from "@reduxjs/toolkit";
import { namespace } from "../utils";
import { type JobType } from "../../types";

/**
 * Initial state for the jobs slice (jobs 슬라이스의 초기 상태)
 */
const initialState: {
    data: JobType[]; // Array of job data (잡 데이터 배열)
    loading: boolean; // Loading state (로딩 상태)
    error: Error | null; // Error state (에러 상태)
} = {
    data: [], // Default to an empty array (기본값으로 빈 배열)
    loading: false,
    error: null,
};

/**
 * Redux slice for managing job data (잡 데이터를 관리하기 위한 Redux 슬라이스)
 */
const {
    reducer, // The reducer for the slice (슬라이스를 위한 리듀서)
    actions: { start, done, fail }, // Actions for managing state (상태 관리를 위한 액션)
} = createSlice({
    name: namespace("jobs"), // Namespace for the slice name (슬라이스 이름을 위한 네임스페이스)
    initialState, // The initial state of the slice (슬라이스의 초기 상태)
    reducers: {
        /**
         * Sets the loading state to true (로딩 상태를 true로 설정합니다.)
         *
         * @param {typeof initialState} state - The current state (현재 상태)
         */
        start: (state) => {
            state.loading = true;
        },

        /**
         * Sets the job data and marks loading as false
         * 잡 데이터를 설정하고 로딩을 false로 설정합니다.
         *
         * @param {typeof initialState} state - The current state (현재 상태)
         * @param {object} action - Redux action object with payload (페이로드를 가진 Redux 액션 객체)
         * @param {JobType[]} action.payload - The job data (잡 데이터)
         */
        done: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },

        /**
         * Sets the error state and marks loading as false
         * 에러 상태를 설정하고 로딩을 false로 설정합니다.
         *
         * @param {typeof initialState} state - The current state (현재 상태)
         * @param {object} action - Redux action object with payload (페이로드를 가진 Redux 액션 객체)
         * @param {Error} action.payload - The error object (에러 객체)
         */
        fail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Export the reducer for use in the store (스토어에서 사용하기 위한 리듀서 내보내기)
export default reducer;

// Export the actions for use in components or sagas (컴포넌트 또는 사가에서 사용하기 위한 액션 내보내기)
export { start, done, fail };