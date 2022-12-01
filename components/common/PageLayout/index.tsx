import { TrophyIcon, BoltIcon } from '@heroicons/react/24/outline'
import React, { ReactNode } from 'react'
import { TMainNav, TSubNav } from '../../../types/TNavigation'
import Sidebar from '../Sidebar'

type TProps = {
  children: ReactNode
  navOptions: {
    main: TMainNav
    sub: TSubNav
  }
}

const PageLayout = ({ children, navOptions }: TProps) => {
  return (
    <>
      <div className='hidden lg:col-span-3 lg:block xl:col-span-2'>
        <Sidebar navOptions={navOptions} />
      </div>
      {children}
    </>
  )
}

export default PageLayout
