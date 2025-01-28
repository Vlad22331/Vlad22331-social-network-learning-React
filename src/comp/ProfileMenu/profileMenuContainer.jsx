import React from "react";
import Profilemenu from "./profileMenu";
import { useSelector, useDispatch } from "react-redux";
import { updateNewPostText, addPost } from "../../redax/profileSlice";

const ProfileMenuContainer = () => {
    const profileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();

    const onUpdateNewPostTextHendler = (text) =>{
        dispatch(updateNewPostText(text));
    }
    const onAddPostHendler = () =>{
        dispatch(addPost());
    }

    return(
        <Profilemenu
            profileData={profileData}
            onUpdateNewPostTextHendler={onUpdateNewPostTextHendler}
            onAddPostHendler={onAddPostHendler}
        /> 
    )
}

export default ProfileMenuContainer