import { TrophyIcon, BoltIcon } from '@heroicons/react/24/outline'
import { PageLayout } from '../common'

import type { ReactNode } from 'react'

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

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <PageLayout navOptions={navigation}>{children}</PageLayout>
}
