    import React, { useState } from "react";
    import ProfileMenu from "./profileMenu";
    import { useSelector, useDispatch } from "react-redux";
    import { updateNewPostText, addPost, changeIsFetching } from "../../redax/profileSlice";
    import { useQuery } from "react-query";
    import fetchUserData from "../../api/fetchUserData"
    import { useEffect } from "react";
    import Preloader from "../preloader"
    import { useParams } from "react-router-dom";
    import fetchSupbaseUser from "../../api/fetchSupbaseUser";

    const ProfileMenuContainer = () => {
        const profileData = useSelector((state) => state.profileData);
        const dispatch = useDispatch();

        const [data, setData] = useState(null);

        const {id} = useParams();
        
        const onUpdateNewPostTextHendler = (text) =>{
            dispatch(updateNewPostText(text));
        }
        const onAddPostHendler = () =>{
            dispatch(addPost());
        }

        useEffect(() => {
            const fetchData = async () => {
                dispatch(changeIsFetching(true));
                try {
                    const users = await fetchSupbaseUser(id);
                    setData(users[0] || null);
                } catch (error) {
                    console.error("Помилка завантаження:", error);
                } finally {
                    dispatch(changeIsFetching(false));
                }
            };
    
            fetchData();
        }, [id, dispatch]);

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