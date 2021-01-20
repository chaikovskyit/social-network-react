import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/User-red.png'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = []; 
    for(let i=1; i <= pagesCount; i++){
      pages.push(i)
    }

  return(

    <div className={s.users}>
        <div className={s.pagination}>
          {pages.map(p => {
            return (
              <span className={props.currentPage === p && s.selectedPage } onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            )
          })}
        </div>

        {props.users.map(u =>
            <div className={s.user} key={u.id}>
              <div className={s.avatarAndButton}>
                <div className={s.avatar}>
                  <NavLink to={"/profile/" + u.id} >
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='Avatar'/>
                  </NavLink>
                </div>
                <div className={s.statusButton}>
                  { u.followed
                    ? <button onClick={() => {

                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true, 
                        headers: {"API-KEY": "ac6c3272-afb5-4405-8f52-97df38bcb416"}
                      })
                        .then(response => {
                          if(response.data.resultCode === 0) {
                            props.unfollow(u.id)
                          }
                        })
                      

                    }}>UnFollow</button> 
                    : <button onClick={() => {

                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {"API-KEY": "ac6c3272-afb5-4405-8f52-97df38bcb416"}
                      })
                        .then(response => {
                          if(response.data.resultCode === 0) {
                            props.follow(u.id)
                          }
                        })
                      

                    }}>Follow</button>
                  }
                </div>
              </div>
              <div className={s.statusAndLocation}>
                <div className={s.status}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div className={s.location}>
                  <div>{'Country'}</div>
                  <div>{'City'}</div>
                </div>
              </div>
            </div> )
        }
    </div>
  )
}

export default Users