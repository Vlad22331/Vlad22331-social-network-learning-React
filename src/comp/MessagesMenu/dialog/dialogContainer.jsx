import React from "react";
import { updateMessageActionCreator, sendMessageActionCreator } from "../../../redax/store";
import Dialog from "./dialog";

const DialogContainer = (props) =>{
    const onUpdateMessage = (text) =>{
        props.dispatch(updateMessageActionCreator(text))
    }
    
    const onSendMessage = () =>{
        props.dispatch(sendMessageActionCreator())
    }
        
    return(
        <Dialog onSendMessage = {onSendMessage} onUpdateMessage = {onUpdateMessage} messageData = {props.messageData}/>
    )
}

export default DialogContainer