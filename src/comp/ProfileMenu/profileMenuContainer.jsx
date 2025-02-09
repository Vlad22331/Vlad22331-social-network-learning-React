    import React from "react";
    import ProfileMenu from "./profileMenu";
    import { useSelector, useDispatch } from "react-redux";
    import { updateNewPostText, addPost, changeIsFetching } from "../../redax/profileSlice";
    import { useQuery, useInfiniteQuery } from "react-query";
    import { useEffect } from "react";
    import { useParams } from "react-router-dom";
    import fetchUserData from "../../api/fetchUserData";
    import fetchPost from "../../api/fetchPost";
    import Preloader from "../preloader";
    import { useInView } from "react-intersection-observer";
    import Post from "./posts/comp/post";

    const ProfileMenuContainer = () => {
        const profileData = useSelector((state) => state.profileData);
        const dispatch = useDispatch();
        const {ref, inView} = useInView({});


        const {id} = useParams();
        
        const {data: user, status: userStatus} = useQuery({
            queryKey: ["user", id],
            queryFn: fetchUserData,
            enabled: !!id
        })

        const {data: post, status: postStatus, fetchNextPage, hasNextPage} = useInfiniteQuery({
            queryKey: ["posts", id],
            queryFn: fetchPost,
            initialPageParam: 0,
            getNextPageParam: (lastPage, allPages) => {
                return lastPage && lastPage.length > 0 ? allPages.length : undefined;
            },
            enabled: !!id
        })

        useEffect(()=>{
            if(inView){
                fetchNextPage()            
            };
        }, [inView, hasNextPage, fetchNextPage])

        useEffect(() =>{
            if(userStatus === "loading") dispatch(changeIsFetching([true, "user"]))   
            else if(userStatus === "success") dispatch(changeIsFetching([false, "user"]))
        }, [userStatus, dispatch])

        useEffect(() =>{
            if(postStatus === "loading") dispatch(changeIsFetching([true, "posts"]))   
            else if(postStatus === "success") dispatch(changeIsFetching([false, "posts"]))
        }, [postStatus, dispatch])

        const postMass =
        post?.pages.flatMap((page, pageIndex) =>
            page.map((item, itemIndex) => {
                const isLastItem =
                    pageIndex === post.pages.length - 1 &&
                    itemIndex === page.length - 1;
    
                return (
                <Post 
                    key={item.id} 
                    postData = {item}
                    ref = {isLastItem ? ref : null}
                />
                );
            })
        ) || null;

        return(
            <div className="main-info">
                {!profileData.userIsFetching || !profileData.postsIsFetching ?
                    <ProfileMenu
                        key={id}
                        userIsFetching={profileData.userIsFetching}
                        postsIsFetching={profileData.postsIsFetching}
                        profileData={user}
                        postMass={postMass}
                        // onUpdateNewPostTextHendler={onUpdateNewPostTextHendler}
                        // onAddPostHendler={onAddPostHendler}
                    />
                : <Preloader/>
                }
            </div>
        )
    }

    export default ProfileMenuContainer