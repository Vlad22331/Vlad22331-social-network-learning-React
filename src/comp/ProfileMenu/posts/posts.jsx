import React from "react";
import styles from "./posts.module.css"
import Post from "./comp/post";

const Posts = (props) => {
    const postComp = props.postsMass.map(item => <Post message= {item.message} likesCount={item.likesCount} />)

    return(               
    <div className={styles.postContainer}>
        <ul className={styles.post}>
            {postComp}
        </ul>
    </div>
    )
}

export default Posts