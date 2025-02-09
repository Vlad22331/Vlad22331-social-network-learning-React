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
            enabled: !!id,
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
                {userStatus === "success" || postStatus === "success"?
                    <ProfileMenu
                        key={id}
                        userStatus={userStatus}
                        postStatus={postStatus}
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