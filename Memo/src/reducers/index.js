import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./memoSlice";

const reducer = combineReducers({
    memo: memoSlice
});

export default configureStore({
    reducer: reducer,
});
