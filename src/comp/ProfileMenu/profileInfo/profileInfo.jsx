import React from "react";
import styles from "./profileInfo.module.css"

const profileInfo = (props) => {
    return (
        <div>
            <div className={styles.mainImgContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/640px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"></img>
            </div>
            <div className={styles.userInfoContainer}>
                <div className={styles.test}>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&s"} alt=""></img>
                </div>
                <div className={styles.userInfoText}>
                    <div className={styles.userInfoName}>
                        <h2>{props.userInfo.name}</h2>
                    </div>
                    <div className={styles.userInfo}>
                        Username: {props.userInfo.username}
                        <br></br>
                        City: {props.userInfo.address.city}
                        <br></br>
                        Email: {props.userInfo.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profileInfo