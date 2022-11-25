import React from 'react'
import UserProfile from '../components/UserProfile'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <a href='/api/auth/login'>Login</a>
      <a href='/api/auth/logout'>Logout</a>
      <UserProfile />
    </>
  )
}

export default Home
