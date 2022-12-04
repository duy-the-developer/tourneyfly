// packages

// components
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'

// utils
import classNames from '../../../../utils/classNames'

// types
import type { TMainNav } from '../../../../types/TNavigation'

type TProps = {
  navigation: TMainNav
}

const PrimaryNav = ({ navigation }: TProps) => {
  const router = useRouter()
  return (
    <div className='space-y-1 pb-8'>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            router.pathname === item.pathname
              ? 'bg-aqua dark:bg-aqua text-black'
              : 'text-aqua hover:bg-yellow hover:text-black',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition hover:translate-x-2'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(
              router.pathname === item.pathname
                ? 'text-slate-900'
                : 'text-aqua group-hover:text-black',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
            )}
            aria-hidden='true'
          />
          <span className='truncate'>{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default PrimaryNav
