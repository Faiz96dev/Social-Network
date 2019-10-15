const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Victor" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Victor" }
  ],

  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "lornm" },
    { id: 3, message: "Vadqwdwdwqa" },
    { id: 4, message: "Vcasmcld  mwd wd " },
    { id: 5, message: "wd2hlam byeb " },
    { id: 6, message: "wqdoi  uwdnn" }
  ],
  newMessageBody: "Dialogs"
}

const dialogsReducer = (state = initialState, action) => {  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
    ...state,
      newMessageBody: action.body
    }

    case SEND_MESSAGE:
        let body = state.newMessageBody

      return {
      ...state,
      messagesData: [...state.messagesData, {id: 2, message: body} ],
      newMessageBody: "",
     
    }
    default :
    return state
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});
export default dialogsReducer;
