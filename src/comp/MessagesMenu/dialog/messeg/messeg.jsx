import React from "react"
import styles from "./messeg.module.css"

const Messeg = (props) => {
    if(!props.youAuthor){
        return(
            <div className={`${styles.dontYourMessage} ${styles.message}`}>
                {props.message}
            </div>
        )
    }
    else{
        return(
            <div className={`${styles.yourMessage} ${styles.message}`}>
                {props.message}
            </div>
        )
    }
}

export default Messeg