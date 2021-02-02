import React from 'react'
import { Field, reduxForm } from 'redux-form' 
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/Preloader/FormsControls/FormsControls'

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

  return(
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field 
          placeholder={'Enter your message'} 
          name={'newMessageBody'} 
          component={Textarea} 
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  )
}

export const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

