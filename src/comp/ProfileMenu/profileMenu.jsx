import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import Posts from "./posts/posts";
import CreatePost from "./createPost/createPost"

const ProfileMenu = (props) => {
    debugger
    return(
        <div className="main-info">
            <ProfileInfo userInfo={props.profileData.userInfo} />
            <div className="posts">
                <CreatePost
                    profileData={props.profileData}
                    onUpdateNewPostText={props.onUpdateNewPostTextHendler}
                    onAddPost={props.onAddPostHendler}
                />
                <Posts postsMass={props.profileData.postsMass} />
            </div>
        </div>
    )
}

export default ProfileMenu