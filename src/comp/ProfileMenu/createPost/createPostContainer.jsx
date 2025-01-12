import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redax/store";
import CreatePost from "./createPost";

const CreatePostContainer = (props) =>{

    const onUpdateNewPostText = (text) =>{
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    const onAddPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }
    
    return (
        <CreatePost onUpdateNewPostText={onUpdateNewPostText} onAddPost={onAddPost} textareaText={props.store.getState().profileData.currentNewPostText} />
    );
}

export default CreatePostContainer