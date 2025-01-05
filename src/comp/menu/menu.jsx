import React from "react";
import styles from "./menu.module.css"
import { NavLink } from "react-router-dom";
import Friends from "./comp/friends/friends";

const menu = () => {
    return(
        <div className={styles.menuListContainer}>    
            <ul className={styles.menuList}>
                <li className={styles.menuItem}> <NavLink to="Profile">Profile</NavLink> </li>
                <li className={styles.menuItem}> <NavLink to="Messages">Messages</NavLink> </li>
                <li className={styles.menuItem}> <NavLink to="News">News</NavLink> </li>
                <li className={styles.menuItem}> <NavLink to="Music">Music</NavLink> </li>
                <li className={styles.menuItem}> <NavLink to="Setting">Setting</NavLink> </li>
            </ul>
            <Friends />
        </div>
    )
}

export default menu