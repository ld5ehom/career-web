import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/rootReducer";

/**
 * Creates a Redux store with the provided root reducer.
 * 주어진 루트 리듀서를 사용하여 Redux 스토어를 생성합니다.
 * @returns {ReturnType<typeof configureStore>} - The configured Redux store
 *                                                (설정된 Redux 스토어)
 */
const create = () => {
    const store = configureStore({ reducer }); // Configure the store with the root reducer (루트 리듀서를 사용하여 스토어 설정)
    return store;
};

export default create;

/**
 * RootState Type
 * Represents the type of the root state managed by the Redux store.
 * Redux 스토어에서 관리하는 루트 상태의 타입을 나타냅니다.
 * @type {ReturnType<ReturnType<typeof create>["getState"]>}
 */
export type RootState = ReturnType<ReturnType<typeof create>["getState"]>;

/**
 * AppDispatch Type
 * Represents the type of the dispatch function for the Redux store.
 * Redux 스토어의 디스패치 함수 타입을 나타냅니다.
 * @type {ReturnType<typeof create>["dispatch"]}
 */
export type AppDispatch = ReturnType<typeof create>["dispatch"];
