import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from '../Common/FormsControls/FormsControls'
import {requiredField, maxLengthCreator}  from '../../utils/validators/validator'

const Dialogs = props => {

    let dialogsElements = props.state.messagePage.dialogsData.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id}/>
    ));
    let messageElements = props.state.messagePage.messagesData.map(message => (
        <Message message={message.message}/>
    ));


    let newMessageBody = props.state.newMessageBody;


    let sendM = (newMessageBody) => {
        props.sendMessage(newMessageBody)

    };



    let addNewMessage =(values)=>{
        sendM(values.newMessageBody)

    }

    return (
        <div className="dialogs">
            <div className="dialogs__users">{dialogsElements}</div>
            <div className="dialogs__messages">
                {messageElements}

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

const maxLength = maxLengthCreator(50)

const addMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className="dialogs__textarea">
            <Field validate={[requiredField, maxLength]} placeholder={'Type yours message'} name={"newMessageBody"} component={Textarea}/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm" })(addMessageForm)

export default Dialogs;
