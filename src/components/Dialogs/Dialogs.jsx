import React from "react";
import "./Dialogs.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = props => {


  let dialogsElements = props.data.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messageElements = props.data.messagesData.map(message => (
    <Message message={message.message} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
let text = newMessage.current.value
alert(text)
  }

  return (
    <div className="dialogs">
      <div className="dialogs__users">{dialogsElements}</div>
      <div className="dialogs__messages">{messageElements}
      <div className="dialogs__textarea"><input className="textarea" ref={newMessage} placeholder="type some message" type="text"/> <button onClick={sendMessage}>Send</button></div>
      </div>
      
    </div>
  );
};

export default Dialogs;
