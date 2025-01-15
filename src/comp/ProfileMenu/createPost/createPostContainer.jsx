import { updateNewPostText, addPost } from "../../../redax/profileSlice";
import CreatePost from "./createPost";
import { useSelector, useDispatch } from "react-redux";

const CreatePostContainer = () =>{
    const profileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();

    const onUpdateNewPostTextHendler = (text) =>{
        dispatch(updateNewPostText(text));
    }
    const onAddPostHendler = () =>{
        dispatch(addPost());
    }
    return(
        <CreatePost
            profileData={profileData}
            onUpdateNewPostText={onUpdateNewPostTextHendler}
            onAddPost={onAddPostHendler}
        />
    )

}


export default CreatePostContainer