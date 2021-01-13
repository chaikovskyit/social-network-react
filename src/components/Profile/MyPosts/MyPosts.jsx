import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

 const MyPosts = (props) => {
  
  const postsElement = props.posts.map((p) => (<Post message={p.message} likeCounter={p.likesCount}/>))

  const newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return(
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText}/>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts