import { TrophyIcon, BoltIcon } from '@heroicons/react/24/outline'
import React, { ReactNode } from 'react'
import { TMainNav, TSubNav } from '../../types/TNavigation'
import Sidebar from '../common/Sidebar'

type TProps = {
  children: ReactNode
  navOptions?: {
    main: TMainNav
    sub: TSubNav
  }
}

const defaultNavOptions = {
  main: [
    { name: 'Tournaments', href: '/', icon: TrophyIcon, current: true },
    {
      name: 'Quick Match',
      href: '/quick-match',
      icon: BoltIcon,
      current: false,
    },
  ],
  sub: [
    { name: 'Twitch', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Tiktok', href: '#' },
    { name: 'Discord', href: '#' },
  ],
}

const PageLayout = ({ children, navOptions = defaultNavOptions }: TProps) => {
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
