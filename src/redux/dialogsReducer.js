const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
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
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state

    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})
      return state

    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer