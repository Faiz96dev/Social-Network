
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

}

const dialogsReducer = (state = initialState, action) => {  
  switch (action.type) {


    case SEND_MESSAGE:
        let body = action.newMessageBody

      return {
      ...state,
      messagesData: [...state.messagesData, {id: 7, message: body} ],

     
    }
    default :
    return state
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
