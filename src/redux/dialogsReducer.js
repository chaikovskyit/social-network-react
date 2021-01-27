const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, name: "Yoda"},
    {id: 2, name: "DarthWaider"},
    {id: 3, name: "R2D2"}
  ],
  messages: [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi"},
    {id: 3, message: "Yo"}
  ]
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SEND_MESSAGE: 
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      };
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer