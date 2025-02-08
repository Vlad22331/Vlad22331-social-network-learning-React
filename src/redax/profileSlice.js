import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    currentNewPostText: "",

    userIsFetching: true,
    postsIsFetching: true,
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
            if(action.payload[1] === "user") state.userIsFetching = action.payload[0]
            else if(action.payload[1] === "posts") state.postsIsFetching = action.payload[0]
        }
        // changeIsFetching(state, action){
        //     state.isFetching = action.payload[0]
        // }
    }
})


export default profileSlice.reducer;
export const { addPost, updateNewPostText, changeIsFetching } = profileSlice.actions;