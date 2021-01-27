import React from 'react'
import { Field, reduxForm } from 'redux-form' 

const AddMessageForm = (props) => {
  return(
    <form onSubmit={ props.handleSubmit }>
        <div>
          <Field 
            placeholder={'Enter your message'} 
            name={'newMessageBody'} 
            component={'textarea'} 
          />
        </div>
        <div>
          <button>send</button>
        </div>
      </form>
  )
}

export const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

