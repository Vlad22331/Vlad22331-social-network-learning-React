import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import Posts from "./posts/posts";
import CreatePost from "./createPost/createPost"

const ProfileMenu = (props) => {
    return(
        <div>
            <ProfileInfo userInfo={props.profileData} />
            <div className="posts">
                {/* <CreatePost
                    profileData={props.profileData}
                    onUpdateNewPostText={props.onUpdateNewPostTextHendler}
                    onAddPost={props.onAddPostHendler}
                />
                <Posts postsMass={props.profileData.postsMass} /> */}
            </div>
        </div>
    )
}

export default ProfileMenu