const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    if (action.type === addPost){
        const newPost = {
            message: state.currentNewPostText,
            likesCount: 0,
            id:3
        }
        state.currentNewPostText = "";
        state.postsMass.unshift(newPost);
    }

    else if(action.type === updateNewPostText){
        state.currentNewPostText = action.text    
    }

    return state
}

export default profileReducer;