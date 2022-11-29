// packages

// components
import Link from 'next/link'
import { TMainNav } from '../../../../types/TNavigation'

import classNames from '../../../../utils/classNames'

type TProps = {
  navigation: TMainNav
}

const PrimaryNav = ({ navigation }: TProps) => {
  return (
    <div className='space-y-1 pb-8'>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-aqua dark:bg-aqua text-black'
              : 'text-aqua hover:bg-yellow hover:text-black',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition hover:translate-x-2'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(
              item.current
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
