import React from 'react'
import SecondaryNav from './SecondaryNav'
import PrimaryNav from './PrimaryNav'

const Sidebar = () => {
  return (
    <nav aria-label='Sidebar' className='sticky top-4 divide-y divide-gray-300'>
      <PrimaryNav />
      <SecondaryNav />
    </nav>
  )
}

export default Sidebar
