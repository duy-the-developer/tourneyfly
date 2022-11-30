// packages
import { TrophyIcon, BoltIcon } from '@heroicons/react/24/outline'

// components
import NavBar from './NavBar'

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

const navigation = {
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

const Layout = ({ navOptions = navigation, children }: TProps) => {
  return (
    <div className='dark min-h-full'>
      <NavBar navigation={navOptions.main} />
      <div className='py-10'>
        <div className='mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
