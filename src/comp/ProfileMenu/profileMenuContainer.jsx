    import React from "react";
    import ProfileMenu from "./profileMenu";
    import { useSelector, useDispatch } from "react-redux";
    import { updateNewPostText, addPost, changeIsFetching } from "../../redax/profileSlice";
    import { useQuery } from "react-query";
    import { useEffect } from "react";
    import Preloader from "../preloader"
    import { useParams } from "react-router-dom";
    import fetchSupbaseUser from "../../api/fetchUserData";

    const ProfileMenuContainer = () => {
        const profileData = useSelector((state) => state.profileData);
        const dispatch = useDispatch();

        const {id} = useParams();
        
        const {data, status} = useQuery({
            queryKey: ["user", id],
            queryFn: fetchSupbaseUser,
            enabled: !!id
        })

        useEffect(() =>{
            if(status === "loading") dispatch(changeIsFetching(true))   
            else if (status === "success") dispatch(changeIsFetching(false))
        }, [status, dispatch])

        const onUpdateNewPostTextHendler = (text) =>{
            dispatch(updateNewPostText(text));
        }
        const onAddPostHendler = () =>{
            dispatch(addPost());
        }
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