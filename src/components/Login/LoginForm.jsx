import React from 'react'
import { Field, reduxForm } from 'redux-form' 
import { minLengthCreator, maxLengthCreator, required } from '../../utils/validators/validators'
import { Input } from '../common/Preloader/FormsControls/FormsControls'
import s from '../common/Preloader/FormsControls/FormsControls.module.css'


const maxLength10 = maxLengthCreator(100)
const minLength6 = minLengthCreator(6)

const LoginForm = (props) => {
  return(
    <form onSubmit={ props.handleSubmit }>
        <div>
          <Field 
            placeholder={'Email'} 
            name={'email'} 
            component={Input}
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <Field 
            placeholder={'Password'} 
            name={'password'} 
            type={'password'}
            component={Input} 
            validate={[required, minLength6]}
          />
        </div>
        <div>
          <Field 
            type={'checkbox'} 
            name={'rememberMe'} 
            component={Input} 
          /> remember me
        </div>
        { 
        props.error && 
          <div className={s.formSummaryError}>
            {props.error}
          </div>
        }
        <div>
          <button type={'submit'}>login</button>
        </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

