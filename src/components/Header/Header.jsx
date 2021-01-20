import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
  console.log(props.id);
  return(
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzqqkCV4J_ZYGAI6ZJ5eRdREMixPdSGz8Mg&usqp=CAU" alt="icon"  />

      <div className={s.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        
      </div>
    </header>
  )
}


export default Header