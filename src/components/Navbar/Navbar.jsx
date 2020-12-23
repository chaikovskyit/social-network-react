import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'


const Navbar = (props) => {

  let friendsItem = props.state.friends.map((person) => (<Friends name={person.name} ava={person.ava}/>))

  return(
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <hr/>
      <h2>Friends</h2>
      <div className={s.people}>
        {friendsItem}
      </div>
      
    </nav>
  )
}

export default Navbar