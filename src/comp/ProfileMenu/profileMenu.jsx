import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import Preloader from "../preloader"
import Posts from "./posts/posts";
import CreatePost from "./createPost/createPost"

const ProfileMenu = (props) => {    
    return(
        <div>
            {props.userIsFetching === false ? <ProfileInfo userInfo={props.profileData} /> : <Preloader/>}
                {/* <CreatePost
                    profileData={props.profileData}
                    onUpdateNewPostText={props.onUpdateNewPostTextHendler}
                    onAddPost={props.onAddPostHendler}
                    />*/
                    // {props.userIsFetching === false ? <Posts postsMass={props.postData} /> : <Preloader/>}
                    <div className="posts">
                    {props.postsIsFetching === false ? <Posts postData={props.postData} /> : <Preloader/>}
                    </div>
                }
        </div>
    )
}

export default ProfileMenu