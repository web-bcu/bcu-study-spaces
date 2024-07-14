const { createSlice } = require("@reduxjs/toolkit");

const avatarSlice = createSlice({
    name: 'active',
    initialState: {
        value: []
    },
    reducers: {
        setAvatar: (state, value) => {
            state.value = value.payload;
        }
    }
});

export const {setAvatar} = avatarSlice.actions;
export default avatarSlice.reducer;