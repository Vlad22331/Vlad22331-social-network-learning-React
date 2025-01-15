import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogSlice from "./dialogSlice";
import dialogReducer from "./dialogReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogSlice 
})


const store = configureStore({
    reducer: reducers
})

export default store;