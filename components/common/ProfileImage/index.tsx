import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'

// import { user } from '../../../data.test'

type TProps = { cStyle: string }

const ProfileImage = ({ cStyle }: TProps) => {
  const { user } = useUser()
  console.log(user)

  return (
    <picture>
      {user && (
        <>
          <source srcSet={user.picture!} />
          <img
            className={`${cStyle} rounded-full`}
            src={user.picture!}
            alt='profile image'
          />
        </>
      )}
    </picture>
  )
}

export default ProfileImage
