import { setMemo } from "../reducers/memoSlice";
import * as API from '../services/API'


export const addMemo = (title, content, notify) => async (dispatch) => {
    try {
        console.log("Adding memo in memoAction.js, title:" + title);
        const { data } = await API.addMemo(title, content, notify);
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMemo = (title) => async (dispatch) => {
    try {
        console.log("Deleting memo in memoAction.js, title:" + title);
        const { data } = await API.deleteMemo(title);
    } catch (error) {
        console.log(error.message);
    }
}

export const loadMemo = () => async (dispatch) => {
    try {
        const { data } = await API.getAllMemo();
        dispatch(setMemo(data));
    } catch (error) {
        console.log(error.message);
    }
}