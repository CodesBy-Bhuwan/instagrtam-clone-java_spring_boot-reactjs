import React from 'react'
import ProfileUserDetail from '../../components/ProfileComponents/ProfileUserDetail'
import ReqUserPostPart from '../../components/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileUserDetail />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
    </div>
  )
}

export default Profile