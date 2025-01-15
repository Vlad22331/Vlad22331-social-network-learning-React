import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "./dialog";
import { updateMessage, sendMessage } from "../../../redax/dialogSlice";

const DialogContainer = () => {
  const messageData = useSelector((state) => state.dialogData);
  const dispatch = useDispatch();
  const updateMessageHendler = (text) => {
    dispatch(updateMessage(text));
  };

  const sendMessageHendler = () => {
    dispatch(sendMessage());
  };

  return (
    <Dialog
      messageData={messageData}
      onUpdateMessage={updateMessageHendler}
      onSendMessage={sendMessageHendler}
    />
    );
};

export default DialogContainer;