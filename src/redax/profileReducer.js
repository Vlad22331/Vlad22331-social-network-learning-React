import { createReducer } from "@reduxjs/toolkit";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

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
        {message: "Sigmo is top", likesCount: 11, id:1},
        {message: "Life is beateful", likesCount: 999999, id:2}
    ],

    currentNewPostText: "",
}

const profileReducer = createReducer (initialState, (builder) => {
    builder
    .addCase(addPost, (state) => {
        const newPost = {
            message: state.currentNewPostText,
            likesCount: 0,
            id:3
        }
        state.currentNewPostText = "";
        state.postsMass.unshift(newPost);
      })

    .addCase (updateNewPostText,(state, action) => {
        state.currentNewPostText = action.text
    })

})


export default profileReducer;