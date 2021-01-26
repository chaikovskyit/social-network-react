import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from '../ProfileInfo/ProfileStatus'

const ProfileInfo = (props) => {
  // loader
  if(!props.profile){
    return <Preloader />
  }

  return(
    
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <div className={s.profilePhoto}>
          <img src={props.profile.photos.large}/>
        </div>
        <ProfileStatus 
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div className={s.info}>
        <p>Full name: {props.profile.fullName}</p>
          <p>About Me: {props.profile.aboutMe}</p>
          <p>I'm in social network</p>
          <ul>
            <li>facebook: {props.profile.contacts.facebook} </li>
            <li>website: {props.profile.contacts.website} </li>
            <li>vkontakte: {props.profile.contacts.vk} </li>
            <li>twitter: {props.profile.contacts.twitter} </li>
            <li>instagram: {props.profile.contacts.instagram} </li>
            <li>youtube: {props.profile.contacts.youtube} </li>
            <li>github: {props.profile.contacts.github} </li>
          </ul>
          <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'} </p> 
          <p>Job description: {props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo