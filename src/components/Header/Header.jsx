import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
  return(
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzqqkCV4J_ZYGAI6ZJ5eRdREMixPdSGz8Mg&usqp=CAU" alt="icon"  />

      <div className={s.loginBlock}>
        { props.isAuth 
          ? <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink> 
        }
      </div>
    </header>
  )
}


export default Header