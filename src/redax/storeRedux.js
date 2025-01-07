import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogReducer
})


const store = configureStore({
    reducer: reducers
})

export default store;