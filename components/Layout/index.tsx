// packages
import {
  TrophyIcon,
  BoltIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

// components
import NavBar from './NavBar'
import Sidebar from './Sidebar'

// types
import type { ReactNode } from 'react'
import { TMainNav, TSubNav } from '../../types/TNavigation'
type TProps = {
  navOptions?: {
    main: TMainNav
    sub: TSubNav
  }
  children: ReactNode
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

const Layout = ({ navOptions = defaultNavOptions, children }: TProps) => {
  return (
    <div className='dark min-h-full'>
      <NavBar navigation={navOptions.main} />
      <div className='py-10'>
        <div className='mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
          <div className='hidden lg:col-span-3 lg:block xl:col-span-2'>
            <Sidebar navOptions={navOptions} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
