import {
    sendMessageCreator,
    updateNewMessageBody
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = state => {
    return {
        state: state

    }
}


let mapDispathToProps = dispatch => {
    return {
        sendMessage: (newMessageBody) => {

            dispatch(sendMessageCreator(newMessageBody))
        },

    }
}


export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withAuthRedirect
)(Dialogs)
  
  