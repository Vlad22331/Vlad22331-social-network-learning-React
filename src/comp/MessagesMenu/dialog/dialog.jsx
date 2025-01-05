import React from "react";
import styles from "./dialog.module.css"
import Messeg from "./messeg/messeg";

const Dialog = (props) =>{
    const messageComp = props.messageMass.map(item => <Messeg message={item.message} youAuthor={item.youAuthor} />)

    const textareaRef = React.createRef();

    const sendMessage = () =>{
        const textareaValue = textareaRef.current.value
        alert (textareaValue)
    }
    
    return(
        <div className={styles.dialogContainer}>
            <div className={styles.messagesContainer}>
                {messageComp}
            </div>
            <div className={styles.textareaContainer}>
                <textarea ref={textareaRef}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialog