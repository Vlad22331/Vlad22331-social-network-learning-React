import React from "react";
import styles from "../posts.module.css"


const Post = React.forwardRef(({ postData }, ref) => { 
    return(
        <li ref={ref}>
            <div>
                <div className={styles.postPoint}> </div>
                <h3>{postData.title}</h3>
            </div>
                <br/>
                <span className={styles.likesCount}>Likes: {postData.likes_count}</span>
        </li>
    )
});

export default Post