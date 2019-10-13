import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = props => {
      
    let dialogsElements = props.state.dialogsData.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id}/>
    ));
    let messageElements = props.state.messagesData.map(message => (
        <Message message={message.message}/>
    ));


    let newMessageBody = props.state.newMessageBody;


    let sendM = () => {
        props.sendMessage()
    };

    let onNewMessageClick = e => {
        let body = e.target.value;
        props.onNewMessageClickC(body)
        

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
                    <button onClick={sendM}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
