import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id

  return(
    <div className={s.dialog}>
      <img src="https://img.favpng.com/1/16/10/person-icon-png-favpng-KJjJkwhVXFhL8CthwvhKVA66u.jpg" alt=""/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem