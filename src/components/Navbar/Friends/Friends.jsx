import { render } from '@testing-library/react'
import React from 'react'
import s from './Friends.module.css'

const Friends = (props) => {
  return(
    <div className={s.friends}>
      <div className={s.friendsItem}>
        <div><img src={props.ava} alt="avatar"/></div>
        {props.name}
      </div>
    </div>
  )
}

export default Friends