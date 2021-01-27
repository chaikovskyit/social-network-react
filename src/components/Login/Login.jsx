import React from 'react'
import { LoginReduxForm } from './LoginForm'

const Login = (props) => {

  const myFunction = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={myFunction}/>
    </div>
  )
}

export default Login