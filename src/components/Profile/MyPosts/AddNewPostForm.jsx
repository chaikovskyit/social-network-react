import React from 'react'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Field, reduxForm } from 'redux-form' 
import { Textarea } from '../../common/Preloader/FormsControls/FormsControls'


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return(
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field 
          placeholder={'Create post'} 
          name={'newPostText'} 
          component={Textarea} 
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  )
}

export const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

