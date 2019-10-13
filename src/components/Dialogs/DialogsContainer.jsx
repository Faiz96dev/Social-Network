import React from "react";
import "./Dialogs.css";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

import {
  sendMessageCreator,
  updateNewMessageBody
} from "../../redux/dialogsReducer";

const DialogsContainer = props => {
//   let state = props.store.getState().messagePage;

//   let sendMessage = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   let onNewMessageClickC = body => {
//     props.store.dispatch(updateNewMessageBody(body));
//   };

  return (
    <StoreContext.Consumer>
      {store => {
          
            let state = store.getState().messagePage;
          
            let sendMessage = () => {
              store.dispatch(sendMessageCreator());
            };
          
            let onNewMessageClickC = body => {
              store.dispatch(updateNewMessageBody(body));
            };
        
        return  <Dialogs
          state={state}
          sendMessage={sendMessage}
          onNewMessageClickC={onNewMessageClickC}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
