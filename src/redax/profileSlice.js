import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    currentNewPostText: "",

    isFetching: true,
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

        changeIsFetching(state, action){
            state.isFetching = action.payload
        }
    }
})


export default profileSlice.reducer;
export const { addPost, updateNewPostText, changeIsFetching } = profileSlice.actions;