    import React from "react";
    import ProfileMenu from "./profileMenu";
    import { useSelector, useDispatch } from "react-redux";
    import { updateNewPostText, addPost, changeIsFetching } from "../../redax/profileSlice";
    import { useQuery } from "react-query";
    import { useEffect } from "react";
    import { useParams } from "react-router-dom";
    import fetchUserData from "../../api/fetchUserData";
    import fetchPost from "../../api/fetchPost";

    const ProfileMenuContainer = () => {
        const profileData = useSelector((state) => state.profileData);
        const dispatch = useDispatch();

        const {id} = useParams();
        
        const {data: user, status: userStatus} = useQuery({
            queryKey: ["user", id],
            queryFn: fetchUserData,
            enabled: !!id
        })

        const {data: post, status: postStatus} = useQuery({
            queryKey: ["posts", id],
            queryFn: fetchPost,
            enabled: !!id
        })

        useEffect(() =>{
            if(userStatus === "loading") dispatch(changeIsFetching([true, "user"]))   
            else if(userStatus === "success") dispatch(changeIsFetching([false, "user"]))
        }, [userStatus, dispatch])

        useEffect(() =>{
            if(postStatus === "loading") dispatch(changeIsFetching([true, "posts"]))   
            else if(postStatus === "success") dispatch(changeIsFetching([false, "posts"]))
        }, [postStatus, dispatch])
        return(
            <div className="main-info">
                {user ? (
                <ProfileMenu
                    key={id}
                    userIsFetching={profileData.userIsFetching}
                    postsIsFetching={profileData.postsIsFetching}
                    profileData={user}
                    postData={post}
                    // onUpdateNewPostTextHendler={onUpdateNewPostTextHendler}
                    // onAddPostHendler={onAddPostHendler}
                />
            ) : (
                <p>Користувач не знайдений</p>
            )
                } 
            </div>
        )
    }

    export default ProfileMenuContainer