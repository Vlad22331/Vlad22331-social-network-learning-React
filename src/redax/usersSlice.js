import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isFetching: true,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        changeIsFetching(state){state.isFetching = !state.isFetching}
    }
})

export default userSlice.reducer
export const {changeIsFetching} = userSlice.actions