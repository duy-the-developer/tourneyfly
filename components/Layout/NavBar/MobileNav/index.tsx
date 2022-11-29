// packages
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { BellIcon } from '@heroicons/react/24/outline'

// utils
import classNames from '../../../../utils/classNames'

// data
import { user, userNavigation, navigation } from '../../../../data.test'
import ProfileImage from '../../../common/ProfileImage'
import { TMainNav } from '../../../../types/TNavigation'

type TProps = {
  navigation: TMainNav
}

const MobileNav = ({ navigation }: TProps) => {
  return (
    <Popover.Panel
      as='nav'
      className='lg:hidden bg-dpurple pb-4'
      aria-label='Global'
    >
      <div className='mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4'>
        {navigation.map((each) => (
          <Link
            key={each.name}
            href={each.href}
            aria-current={each.current ? 'page' : undefined}
            className={classNames(
              each.current
                ? 'bg-aqua text-gray-800'
                : 'hover:bg-yellow text-aqua hover:text-gray-900',
              'block rounded-md py-2 px-3 text-base font-medium'
            )}
          >
            {each.name}
          </Link>
        ))}
      </div>
      <div className='border-t border-gray-200 pt-4'>
        <div className='mx-auto flex max-w-3xl items-center px-4 sm:px-6'>
          <div className='flex-shrink-0'>
            <ProfileImage cStyle='h-10 w-10' />
          </div>
          <div className='ml-3'>
            <div className='text-base font-medium text-aqua'>{user.name}</div>
            <div className='text-sm font-medium text-gray-400'>
              {user.email}
            </div>
          </div>
          <button
            type='button'
            className='ml-auto flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4'>
          {userNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href || '#'}
              className='block rounded-md py-2 px-3 text-base font-medium text-gray-300 hover:bg-yellow hover:text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className='mx-auto mt-6 max-w-3xl px-4 sm:px-6'>
        <Link
          href='#'
          className='flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-800'
        >
          New Post
        </Link>
      </div>
    </Popover.Panel>
  )
}

export default MobileNav
