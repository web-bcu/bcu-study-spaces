import { createSlice } from "@reduxjs/toolkit";

const showPostFormSlice = createSlice({
    name: "showPostForm",
    initialState: true,
    reducers: {
        setShowPostForm: (state) => !state
    }
});

export const {setShowPostForm} = showPostFormSlice.actions;
export default showPostFormSlice.reducer;