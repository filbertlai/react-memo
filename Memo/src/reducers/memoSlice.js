import { createSlice } from "@reduxjs/toolkit"

const initialData = {
    value: []
};

const memoSlice = createSlice({
    name: "memo",
    initialState: initialData,
    reducers: {
        setMemo: (state, data) => {
            state.value = data.payload;
        },
    },
});

export const { setMemo } = memoSlice.actions;

export default memoSlice.reducer;
