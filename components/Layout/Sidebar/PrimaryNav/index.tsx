import Link from 'next/link'

import classNames from '../../../../utils/classNames'

import { navigation } from '../../../../data.test'

const PrimaryNav = () => {
  return (
    <div className='space-y-1 pb-8'>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-aqua dark:bg-aqua text-slate-800'
              : 'text-aqua hover:bg-yellow hover:text-gray-600',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(
              item.current
                ? 'text-slate-800'
                : 'text-aqua group-hover:text-gray-600',
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
