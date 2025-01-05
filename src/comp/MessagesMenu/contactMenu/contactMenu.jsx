import React from "react";
import styles from "./contactMenu.module.css"
import Contact from "./contact/contact";

const ContactMenu = (props) =>{
    const contactComp = props.contactMass.map(item => <li className="item"><Contact name={item.name} id={item.id} avaSrc={item.avaSrc} /></li>)
    return(
        <div className={styles.contactsMenu}>
            <ul className={styles.contacts}>
                {contactComp}
            </ul>
        </div>
    )
}

export default ContactMenu