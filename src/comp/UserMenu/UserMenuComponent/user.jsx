import React from "react";
import style from "./user.module.css"

const User = (props) => {
    // const followChange = () =>{
    //     props.followChange(props.userData.id)
    // } 
    // 
    // return(
    //     <div className={style.container}>
    //         <div className={style.imgBtnBlock}>
    //             <img src={props.userData.avaImg} alt=""/>
    //             {props.userData.followed ? <button onClick={followChange}>Unfollow</button> : <button onClick={followChange}>Follow</button>}             
    //         </div>
    //         <div className={style.infoBlock}>
    //             <div className={style.mainInfo}>
    //                 <h2>{props.userData.name}</h2>
    //                 <h3>{props.userData.status}</h3>
    //             </div>
    //             <div className={style.location}>
    //                 <h3>{props.userData.location.country}</h3>
    //                 <h3>{props.userData.location.city}</h3>
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <div className={style.container}>
            <div className={style.imgBtnBlock}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s"} alt=""/>
            </div>
            <div className={style.infoBlock}>
                <div className={style.mainInfo}>
                    <h2>{props.userData.username}</h2>
                    <h3>{props.userData.name}</h3>
                </div>
                <div className={style.location}>
                    <h3>{props.userData.address.city}</h3>
                    <h3>{props.userData.address.street}</h3>
                </div>
            </div>
        </div>
    )
}

export default User