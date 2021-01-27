import React from 'react'

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input placeholder={'login'}/>
        </div>
        <div>
          <input placeholder={'password'}/>
          
        </div>
        <div>
          <input type={"checkbox"}/> remember me
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
    </div>
  )
}

export default Login