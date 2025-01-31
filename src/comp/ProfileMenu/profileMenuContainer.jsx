    import React from "react";
    import ProfileMenu from "./profileMenu";
    import { useSelector, useDispatch } from "react-redux";
    import { updateNewPostText, addPost, changeIsFetching } from "../../redax/profileSlice";
    import { useQuery } from "react-query";
    import fetchUserData from "../../api/fetchUserData"
    import { useEffect } from "react";
    import Preloader from "../preloader"
    import { useParams } from "react-router-dom";

    const ProfileMenuContainer = () => {
        const profileData = useSelector((state) => state.profileData);
        const dispatch = useDispatch();

        const {id} = useParams();

        const {data, status, isLoading} = useQuery({
            queryKey: ["user", id],
            queryFn: fetchUserData,
            enabled: !!id
        })
        
        const onUpdateNewPostTextHendler = (text) =>{
            dispatch(updateNewPostText(text));
        }
        const onAddPostHendler = () =>{
            dispatch(addPost());
        }

        useEffect(() => {
            if (status === "success") dispatch(changeIsFetching());
            else if (status === "loading") dispatch(changeIsFetching())
        }, [status, dispatch]);

        return(
            <div className="main-info">
                {profileData.isFetching ? <Preloader/> :
            data ? (
                <ProfileMenu
                    key={data.id}
                    profileData={data}
                    onUpdateNewPostTextHendler={onUpdateNewPostTextHendler}
                    onAddPostHendler={onAddPostHendler}
                />
            ) : (
                <p>Користувач не знайдений</p>
            )
                } 
            </div>
        )
    }

    export default ProfileMenuContainer