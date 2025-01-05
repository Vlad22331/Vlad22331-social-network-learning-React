import React from "react";
import styles from "./friend.module.css"

const Friend = () =>{
    return(
        <li className={styles.friendContainer}>
            <img src="https://i1.sndcdn.com/artworks-ObPJ3Klt2IV4QMlX-W4lBmQ-t500x500.jpg" />
            <span>Sigmo</span>
        </li>
    )
}

export default Friend