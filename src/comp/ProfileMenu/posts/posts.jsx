import React from "react";
import styles from "./posts.module.css"
import Post from "./comp/post";

const Posts = (props) => {
    debugger
    const postComp = props.postData.map(item => <Post key={item.id} message= {item.title} likesCount={item.likes_count ? item.likes_count : 1} />)

    return(               
    <div className={styles.postContainer}>
        <ul className={styles.post}>
            {postComp}
        </ul>
    </div>
    )
}

export default Posts