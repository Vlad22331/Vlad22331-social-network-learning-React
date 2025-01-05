import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./contact.module.css"

const Contact = (props) =>{
    const userIdAdress = "/Messages/" + props.id
    return(
        <li>
            <NavLink  className={styles.item} to={userIdAdress}>
                <img className={styles.contactImg} src={props.avaSrc}></img>
                {props.name}
            </NavLink>
        </li>
    )
}

export default Contact