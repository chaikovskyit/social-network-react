import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { AddNewPostReduxForm } from './AddNewPostForm'

 const MyPosts = React.memo(props => {
  
  const postsElement = props.posts.map((p) => (<Post message={p.message} likeCounter={p.likesCount}/>))
  
  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return(
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
})

export default MyPosts