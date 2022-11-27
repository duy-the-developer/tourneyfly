// packages
import React from 'react'

// components
import NavBar from './NavBar'
import Sidebar from './Sidebar'

// types
import type { ReactNode } from 'react'
type TProps = {
  children: ReactNode
}

const Layout = ({ children }: TProps) => {
  return (
    <div className='dark min-h-full'>
      <NavBar />
      <div className='py-10'>
        <div className='mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
          <div className='hidden lg:col-span-3 lg:block xl:col-span-2'>
            <Sidebar />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
