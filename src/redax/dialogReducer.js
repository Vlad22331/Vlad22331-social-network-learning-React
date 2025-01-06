const updateMessage = "UPDATE-MESSAGE";
const sendMessage = "SEND-MESSAGE";

const dialogReducer = (state, action) => {
    if(action.type === updateMessage){
        state.typedMessage = action.text;
    }

    else if(action.type === sendMessage){
        const newMessage = {
            message: state.typedMessage,
            youAuthor: true
        }
        state.typedMessage = "";
        state.messageMass.push(newMessage)
    }

    return state
}

export default dialogReducer