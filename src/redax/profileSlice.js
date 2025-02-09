import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    currentNewPostText: "",
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost(state) {
            if(state.currentNewPostText.trim() === "") return
            const newPost = {
                message: state.currentNewPostText,
                likesCount: 0,
                id:3
            }
            state.currentNewPostText = "";
            state.postsMass.unshift(newPost);
        },

        updateNewPostText(state, action) {
            state.currentNewPostText = action.payload
        },
    }
})


export default profileSlice.reducer;
export const { addPost, updateNewPostText, changeIsFetching } = profileSlice.actions;