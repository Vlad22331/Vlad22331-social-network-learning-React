import React from "react";
import styles from "../posts.module.css"

const Post = (props) => {    
    return(
        <li>
            <div>
                <div className={styles.postPoint}> </div>
                <h3>{props.message}</h3>
            </div>
                <br/>
                <span className={styles.likesCount}>Likes: {props.likesCount}</span>
        </li>
    )
}

export default Post