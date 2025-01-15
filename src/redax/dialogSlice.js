import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    typedMessage: "",
    messageMass: [
        {message: "Hi", youAuthor: true},
        {message: "Hi", youAuthor: false},
        {message: "What are you", youAuthor: true},
        {message: "I'm great", youAuthor: false},

    ],

    contactMass: [
        {name: "Sigmo", id: 1, avaSrc: "https://i1.sndcdn.com/artworks-ObPJ3Klt2IV4QMlX-W4lBmQ-t500x500.jpg"},
        {name: "Tidjoy", id: 2, avaSrc: "https://i.pinimg.com/736x/c2/17/03/c21703e6afaf99779d0baeaae798229d.jpg"},
        {name: "Vitaly", id: 3, avaSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpmmwhk99OJtXRtOtyC8hhQ9mKJAqK0YDM6EPbFXe7PAH6gxcu"},
        {name: "Arbuz", id: 4, avaSrc: "https://i.ytimg.com/vi/B870sXlIjNs/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH6A4AC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLCS_-dG5SO0tBAXENbbYYiwvo9Mog"},
        {name: "Gomniak", id: 5, avaSrc: "https://inweb.ua/blog/wp-content/uploads/2024/05/hamster-kombat-mozhe-buti-1120x588.jpg"},
    ]
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        updateMessage(state, action) {
            state.typedMessage = action.payload
        },
        sendMessage(state) {
            const newMessage = {
                message: state.typedMessage,
                youAuthor: true
            }
            state.typedMessage = "";
            state.messageMass.push(newMessage)
        }
    }
})

export const { updateMessage, sendMessage } = dialogSlice.actions;  
export default dialogSlice.reducer