import React from "react";
import style from "./user.module.css"

const ChangeUserButton = (props) => {
    return(
        <button className={style.changeBtn} onClick={props.changeUser}>Change user</button>
    )
}

export default ChangeUserButton;    