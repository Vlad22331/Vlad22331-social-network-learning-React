import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import dialogSlice from "./dialogSlice";
import userSlice from "./usersSlice"

let reducers = combineReducers({
    profileData: profileSlice,
    dialogData: dialogSlice,
    usersData: userSlice
})


const store = configureStore({
    reducer: reducers
})

export default store;