import React from "react";
import styles from "./friends.module.css"
import Friend from "./friend/friend";

const Friends = () =>{
    return(
        <div className={styles.friendsContainer}>
            <h2>Friends</h2>
            <ul className={styles.friendList}>
                <Friend />
                <Friend />
                <Friend />
            </ul>
        </div>
    )
}

export default Friends