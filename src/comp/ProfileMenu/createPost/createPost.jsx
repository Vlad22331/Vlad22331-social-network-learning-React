import React from "react";
import styles from "./createPost.module.css"

const createPost = (props) =>{
    debugger
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
            <textarea onChange={updateNewPostText} value={props.profileData.currentNewPostText} placeholder="your news..."></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default createPost