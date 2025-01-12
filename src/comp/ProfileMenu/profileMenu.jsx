import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import Posts from "./posts/posts";
import CreatePostContainer from "./createPost/createPostContainer";

const mainWindow = (props) => {
    return(
        <div className="main-info">
            <ProfileInfo userInfo={props.store.getState().profileData.userInfo} />
            <div className="posts">
                <CreatePostContainer store = {props.store}/>
                <Posts postsMass={props.store.getState().profileData.postsMass} />
            </div>
        </div>
    )
}

export default mainWindow