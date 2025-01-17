import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: [
        {id: 1, followed: true, name: "Alex", status: "Enjoying life", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "New York", country: "USA"}},
        {id: 2, followed: true, name: "Maria", status: "Working hard", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Berlin", country: "Germany"}},
        {id: 3, followed: false, name: "John", status: "On vacation", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Tokyo", country: "Japan"}},
        {id: 4, followed: false, name: "Sophia", status: "Learning new things", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Paris", country: "France"}},
        {id: 5, followed: false, name: "Michael", status: "Exploring the world", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Sydney", country: "Australia"}},
        {id: 6, followed: false, name: "Emma", status: "Reading books", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "London", country: "UK"}},
        {id: 7, followed: false, name: "Daniel", status: "Playing sports", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Toronto", country: "Canada"}},
        {id: 8, followed: true, name: "Olivia", status: "Cooking delicious food", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Rome", country: "Italy"}},
        {id: 9, followed: true, name: "James", status: "Writing code", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "San Francisco", country: "USA"}},
        {id: 10, followed: true, name: "Isabella", status: "Painting", avaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s", location: {city: "Barcelona", country: "Spain"}}
    ]
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        followChange(state, action){
            const user = state.users.find(user => user.id === action.payload);
            if (user) {
                user.followed = !user.followed;
            }
        }
    }
})

export default userSlice.reducer
export const {followChange} = userSlice.actions