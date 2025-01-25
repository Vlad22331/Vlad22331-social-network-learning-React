import User from "./user";
import style from "./user.module.css"
import { useInfiniteQuery, useQuery } from "react-query";
import fetchUsers from "../../../api/fetchUsers";
import { useEffect, useState } from "react";   
import { useInView } from "react-intersection-observer";

const UserContainer = ()=>{
    const {ref, inView} = useInView({});

    const { data, status, fetchNextPage, hasNextPage} = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });

    useEffect(()=>{
        if(inView){
            fetchNextPage()            
        };
        if(!hasNextPage){

        }
    }, [inView, hasNextPage, fetchNextPage])

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
            {status === "loading" && <div>Loading data...</div>}
            {status === "error" && <div>Eror</div>}
            {status === "success" && userMass}
        </div>
    )
}

export default UserContainer