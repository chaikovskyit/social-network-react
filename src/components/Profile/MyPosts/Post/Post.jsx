import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  
  return(
    <div className={s.item}>
      <img src="https://avatarfiles.alphacoders.com/264/thumb-1920-264470.jpg" alt=""/>
      {props.message}
      <div>
        <span>Like {props.likeCounter}</span>
      </div>
    </div>
  )
}

export default Post