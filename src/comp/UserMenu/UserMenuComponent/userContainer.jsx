import { useDispatch, useSelector } from "react-redux";
import User from "./user";
import { followChange } from "../../../redax/userSlice";
import style from "./user.module.css"

const UserContainer = ()=>{
    const usersData = useSelector((state) => state.usersData)
    const dispatch = useDispatch()

    const onFollowChangeHendler = (action) =>{
        dispatch(followChange(action))
    }

    const userMass = usersData.users.map(item => <User
        key = {item.id} 
        userData={item} 
         followChange={onFollowChangeHendler}
         />) 

    return (
        <div className={style.userContainer}>
            {userMass}
        </div>
    )
}

export default UserContainer