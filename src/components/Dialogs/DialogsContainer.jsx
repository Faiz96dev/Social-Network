
import {
    sendMessageCreator,
    updateNewMessageBody
  } from "../../redux/dialogsReducer";
  import Dialogs from "./Dialogs";
  import { connect } from "react-redux";

  
  
  
  let mapStateToProps = state => {
      return {
        state: state
      }
  }
  
  
  let mapDispathToProps = dispatch => {
      return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        onNewMessageClickC: (body ) => { dispatch(updateNewMessageBody(body)) }
      }
  }
  
  const DialogsContainer = connect(mapStateToProps, mapDispathToProps) (Dialogs)
  
  export default DialogsContainer;
  
  