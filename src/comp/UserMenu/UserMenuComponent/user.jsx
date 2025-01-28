import React from "react";
import style from "./user.module.css"
import { NavLink } from "react-router-dom";

const User = React.forwardRef(({ userData }, ref) => {
    return (
        <NavLink to = {`/profile/${userData.id}`} ref={ref} className={style.container}>    
            <div className={style.imgBtnBlock}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s"} alt=""/>
            </div>
            <div className={style.infoBlock}>
                <div className={style.mainInfo}>
                    <h2>{userData.username}</h2>
                    <h3>{userData.name}</h3>
                </div>
                <div className={style.location}>
                    <h3>{userData.address.city}</h3>
                    <h3>{userData.address.street}</h3>
                </div>
            </div>
        </NavLink>
    );
});


export default User