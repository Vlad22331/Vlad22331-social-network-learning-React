import React from "react";
import styles from "./createPost.module.css"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redax/store";

const createPost = (props) =>{
    const createPostTextarea = React.createRef();

    const updateNewPostText = () =>{
        const text = createPostTextarea.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    const addPost = () =>{
        if(createPostTextarea.current.value) {
            props.dispatch(addPostActionCreator())
        }
    }

    return(
        <div className={styles.createPost}>
            <h2>My posts</h2>
            <textarea ref={createPostTextarea} onChange={updateNewPostText} value={props.textareaText} placeholder="your news..."></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default createPost