import React from "react";
import styles from "./dialog.module.css"
import Messeg from "./messeg/messeg";

const Dialog = (props) =>{
    const updateMessage = () =>{
        const text = textareaRef.current.value
        props.onUpdateMessage(text)
    }
    
    const sendMessage = () =>{
        props.onSendMessage()
    }
    
    const textareaRef = React.createRef()

    const messageComp = props.messageData.messageMass.map(item => <Messeg message={item.message} youAuthor={item.youAuthor} />)
    
    return(
        <div className={styles.dialogContainer}>
            <div className={styles.messagesContainer}>
                {messageComp}
            </div>
            <div className={styles.textareaContainer}>
                <textarea value = {props.messageData.typedMessage} onChange={updateMessage} ref={textareaRef}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialog