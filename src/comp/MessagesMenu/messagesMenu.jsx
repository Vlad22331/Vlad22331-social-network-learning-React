import React from "react";
import ContactMenu from "./contactMenu/contactMenu";
import Dialog from "./dialog/dialog";
import styles from "./messageMenu.module.css"
import DialogContainer from "./dialog/dialogContainer";

const Messages = (props) => {
    const dialogData = props.store.getState().dialogData
    return(
        <div className={styles.messageMainInfo}>
            <ContactMenu contactMass={dialogData.contactMass} />
            <DialogContainer messageData={dialogData} dispatch = {props.store.dispatch}/>
        </div>
    )
}

export default Messages