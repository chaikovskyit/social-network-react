import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import {AddMessageReduxForm} from './AddMessageForm'
// import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'

const Dialogs = (props) => {
  
  let state = props.dialogsPage
  let dialogsElement = state.dialogs.map((d) => (<DialogItem name={d.name} key={d.id} id={d.id}/>))
  let messagesElement = state.messages.map((m) => (<Message message={m.message} key={m.id}/>))
  let newMessageBody = state.newMessageBody
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return(<Redirect to={'/login'} /> )
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <div>
          {messagesElement}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs