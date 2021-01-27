import React from 'react'
import { Field, reduxForm } from 'redux-form' 

const AddNewPostForm = (props) => {
  return(
    <form onSubmit={ props.handleSubmit }>
        <div>
          <Field 
            placeholder={'Create post'} 
            name={'newPostText'} 
            component={'textarea'} 
          />
        </div>
        <div>
          <button>add post</button>
        </div>
      </form>
  )
}

export const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

