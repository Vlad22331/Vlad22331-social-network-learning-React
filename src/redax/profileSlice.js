import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    userInfo: {
        id: 0,
        avaImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XIwy1-Y3ryDKHhyXMGTALfaC2HPIH_5i5kkWU6oT3LmLnEqVk4Nxe3JAVg&s",
        userName: "Vlad V.",
        birthday: "January 9",
        city: "Rivne",
        education: "SSS 'RVCNU of B and NM of Ukraine'"
    },
    
    postsMass: [
        {message: "kkkkkksss", likesCount: 1, id:0},
        {message: "He is top", likesCount: 11, id:1},
        {message: "Life is beateful", likesCount: 999999, id:2}
    ],

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
        }
    }
})


export default profileSlice.reducer;
export const { addPost, updateNewPostText } = profileSlice.actions;