import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = () => {
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Yoda" id="1"/>
        <DialogItem name="DarthWaider" id="2"/>
        <DialogItem name="R2D2" id="3"/>
      </div>
      <div className={s.messages}>
        <Message message="Hello"/>
        <Message message="Hi"/>
        <Message message="Yo"/>
      </div>
    </div>
  )
}

export default Dialogs