// packages
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'

const UserProfile = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      {user && (
        <div>
          <picture>
            <source srcSet={user.picture!} />
            <img src={user.picture!} alt={user.name!} />{' '}
          </picture>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  )
}

export default UserProfile
