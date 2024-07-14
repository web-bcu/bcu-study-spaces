import { combineReducers } from "@reduxjs/toolkit"
import activeSlice from './active';
import avatarSlice from './avatar';
import adminSlice from './admin'

const rootReducer = combineReducers({
    active: activeSlice,
    avatar: avatarSlice,
    admin: adminSlice
})

export default rootReducer;