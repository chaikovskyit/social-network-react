import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return(
    <div className={s.content}>
        <div>
          <img src="https://data3.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-squadrons/features/maverick_pdp_prefeature_mission_en_ww_v1.jpg/864772b4-37cc-4f6d-b3f0-d144e29ea5c5/original.jpg" alt=""/>
        </div>
        Main content
        <div>
          ava + content
        </div>
        <MyPosts />
      </div>
  )
}

export default Profile