import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    // userInfo: {
    //     id: 0,
    //     userName: "Vlad V.",
    //     birthday: "January 9",
    //     city: "Rivne",
    //     education: "SSS 'RVCNU of B and NM of Ukraine'"
    // },
    
    // postsMass: [
    //     {message: "kkkkkksss", likesCount: 1, id:0},
    //     {message: "He is top", likesCount: 11, id:1},
    //     {message: "Life is beateful", likesCount: 999999, id:2}
    // ],

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