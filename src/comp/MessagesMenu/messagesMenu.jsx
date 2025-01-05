import React from "react";
import ContactMenu from "./contactMenu/contactMenu";
import Dialog from "./dialog/dialog";
import styles from "./messageMenu.module.css"

const Messages = (props) => {
    return(
        <div className={styles.messageMainInfo}>
            <ContactMenu contactMass={props.messageData.contactMass} />
            <Dialog messageData={props.messageData} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Messages