import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redax/store";
import CreatePost from "./createPost";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
    return {
        textareaText: state.profileData.currentNewPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateNewPostText: (text) =>{
            const action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        onAddPost: () =>{
            dispatch(addPostActionCreator())
        }
    }
}
const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer