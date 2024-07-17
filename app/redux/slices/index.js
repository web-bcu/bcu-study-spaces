import { combineReducers } from "@reduxjs/toolkit"
import activeSlice from './active';
import avatarSlice from './avatar';
import adminSlice from './admin'
import showPostForm from "./showPostForm";

const rootReducer = combineReducers({
    active: activeSlice,
    avatar: avatarSlice,
    admin: adminSlice,
    showPostForm: showPostForm
})

export default rootReducer;