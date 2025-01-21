import { useDispatch } from "react-redux";
import User from "./user";
import { followChange } from "../../../redax/userSlice";
import style from "./user.module.css"
import { useQuery } from "react-query";
import fetchUsers from "../../../api/fetchUsers";
import ChangeUserButton from "./ChangeUserButton";
import { useState } from "react";   

const UserContainer = ()=>{
    // const usersData = useSelector((state) => state.usersData)
    // const dispatch = useDispatch()
    
    // const onFollowChangeHendler = (action) =>{
    //     dispatch(followChange(action))
    // }

    // const userMass = usersData.users.map(item => <User
    //     key = {item.id} 
    //     userData={item} 
    //      followChange={onFollowChangeHendler}
    //      />) 

    // return (
    //     <div className={style.userContainer}>
    //         {userMass}
    //     </div>
    // )
    const [page, setPage] = useState(0)

    const {data, status} = useQuery(["users", page], fetchUsers,)
    const dispatch = useDispatch()

    const onFollowChangeHendler = (action) =>{
        dispatch(followChange(action))
    }

    const changeUser = () =>{
        setPage((old) => old + 1)
    }

    const userMass = data ? data.map(item => (
        <User
        key = {item.id} 
        userData={item} 
        followChange={onFollowChangeHendler}
        />)) : null

    return (
        <div className={style.userContainer}>
            {status === "loading" && <div>Loading data...</div>}
            {status === "error" && <div>Eror</div>}
            {status === "success" && userMass}
            <ChangeUserButton changeUser = {changeUser}/>
        </div>
    )
}

export default UserContainer