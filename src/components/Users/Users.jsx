import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/User-red.png'
import {NavLink} from 'react-router-dom'
import Pagination from '../Pagination/Pagination'

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // кількість сторінок
    let pages = [];   // масив сторінок
    for(let i=1; i <= pagesCount; i++){
      pages.push(i)
    }

  return(

    <div className={s.users}>
        <div className={s.pagination}>
          {pages.map(p => {
            return (
              <span className={props.currentPage === p && s.selectedPage } 
              onClick={(e) => {props.onPageChanged(p)}}>{p}&nbsp;</span>
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
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                      onClick={() => { props.unfollow(u.id) }}>
                        UnFollow
                      </button> 

                    : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                      onClick={() => { props.follow(u.id) }}>
                        Follow
                      </button>
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
        <Pagination 
          lastPage={pagesCount}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
        />
    </div>
  )
}

export default Users