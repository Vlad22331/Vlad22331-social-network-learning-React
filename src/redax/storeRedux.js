import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import profileSlice from "./profileSlice";
import dialogSlice from "./dialogSlice";

let reducers = combineReducers({
    profileData: profileSlice,
    dialogData: dialogSlice 
})


const store = configureStore({
    reducer: reducers
})

export default store;