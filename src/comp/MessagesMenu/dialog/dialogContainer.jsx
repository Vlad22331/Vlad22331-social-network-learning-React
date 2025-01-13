import { updateMessageActionCreator, sendMessageActionCreator } from "../../../redax/store";
import Dialog from "./dialog";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
    return{
        messageData: state.dialogData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onUpdateMessage: (text) =>{
            dispatch(updateMessageActionCreator(text))
        },
        onSendMessage: () =>{
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer