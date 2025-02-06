import User from "./user";
import style from "./user.module.css"
import { useInfiniteQuery } from "react-query";
import fetchUsers from "../../../api/fetchUsers";
import fetchSupbaseUsers from "../../../api/fetchUsers"
import { useEffect } from "react";   
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { changeIsFetching } from "../../../redax/userSlice";
import Preloader from "../../preloader";

const UserContainer = ()=>{
    const usersData = useSelector((state) => state.usersData)
    const dispatch = useDispatch();
    const {ref, inView} = useInView({});

    const { data, status, fetchNextPage, hasNextPage} = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchSupbaseUsers,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage && lastPage.length > 0 ? allPages.length : undefined;
        }
    });

    useEffect(()=>{
        if(inView){
            fetchNextPage()            
        };
    }, [inView, hasNextPage, fetchNextPage])

    useEffect(() => {
        if (status === "success") {
            dispatch(changeIsFetching());
        }
    }, [status, dispatch]);

    const userMass =
    data?.pages.flatMap((page, pageIndex) =>
        page.map((item, itemIndex) => {
            const isLastItem =
                pageIndex === data.pages.length - 1 &&
                itemIndex === page.length - 1;

            return (
                <User
                    key={item.id}
                    userData={item}
                    ref={isLastItem ? ref : null}
                />
            );
        })
    ) || null;

    return (
        <div className={style.userContainer}>
            {usersData.isFetching ? <Preloader/> : userMass}
        </div>
    )
}

export default UserContainer