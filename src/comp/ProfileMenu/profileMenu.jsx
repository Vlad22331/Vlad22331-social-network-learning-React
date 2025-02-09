import React from "react";
import ProfileInfo from "./profileInfo/profileInfo"
import Preloader from "../preloader"
import Posts from "./posts/posts";
import CreatePost from "./createPost/createPost"

const ProfileMenu = (props) => {    
    return(
        <div>
            {!props.userIsFetching ? <ProfileInfo userInfo={props.profileData} /> : <Preloader/>}
                {/* <CreatePost
                    profileData={props.profileData}
                    onUpdateNewPostText={props.onUpdateNewPostTextHendler}
                    onAddPost={props.onAddPostHendler}
                    />*/
                    <div className="posts">
                        {!props.postsIsFetching ? <Posts postMass={props.postMass} /> : <Preloader/>}
                    </div>
                }
        </div>
    )
}

export default ProfileMenu