import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import CreatePost from "./createPost/createPost";
import Posts from "./posts/posts";

const mainWindow = (props) => {
    return(
        <div className="main-info">
            <ProfileInfo userInfo={props.profileData.userInfo} />
            <div className="posts">
                <CreatePost dispatch={props.dispatch} textareaText = {props.profileData.currentNewPostText}/>
                <Posts postsMass={props.profileData.postsMass} />
            </div>
        </div>
    )
}

export default mainWindow