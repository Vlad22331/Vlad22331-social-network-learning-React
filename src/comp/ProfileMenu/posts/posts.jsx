import React from "react";
import styles from "./posts.module.css"

const Posts = (props) => {
    return(               
    <div className={styles.postContainer}>
        <ul className={styles.post}>
            {props.postMass}
        </ul>
    </div>
    )
}

export default Posts