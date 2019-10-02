import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { sendMessageCreator, updateNewMessageBody } from "../../redux/dialogsReducer";

let Dialogs;
Dialogs = props => {
    let dialogsElements = props.data.dialogsData.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id}/>
    ));
    let messageElements = props.data.messagesData.map(message => (
        <Message message={message.message}/>
    ));


    let newMessageBody = props.data.newMessageBody;


    let sendMessage = () => {
        props.dispatch(sendMessageCreator());

    };

    let onNewMessageClick = e => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBody(body));

    };

    return (
        <div className="dialogs">
            <div className="dialogs__users">{dialogsElements}</div>
            <div className="dialogs__messages">
                {messageElements}
                <div className="dialogs__textarea">
          <textarea
              value={newMessageBody}
              onChange={onNewMessageClick}
              className="textarea"

              placeholder="type some message"
              type="text"
          />{" "}
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
