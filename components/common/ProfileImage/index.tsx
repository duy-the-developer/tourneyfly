import React from 'react'

import { user } from '../../../data.test'

const ProfileImage = ({ cStyle }: { cStyle: string }) => {
  return (
    <picture>
      <source srcSet={user.imageUrl} />
      <img
        className={`${cStyle} rounded-full`}
        src={user.imageUrl}
        alt='profile image'
      />
    </picture>
  )
}

export default ProfileImage
