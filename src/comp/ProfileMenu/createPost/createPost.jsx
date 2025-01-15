import React from "react";
import styles from "./createPost.module.css"

const createPost = (props) =>{
    const updateNewPostText = (event) =>{
        const text = event.target.value;
        props.onUpdateNewPostText(text)    
    }

    const addPost = () =>{
        props.onAddPost()
    }

    return(
        <div className={styles.createPost}>
            <h2>My posts</h2>
            <textarea onChange={updateNewPostText} value={props.textareaText} placeholder="your news..."></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default createPost