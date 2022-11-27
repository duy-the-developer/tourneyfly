// packages
import { Popover } from '@headlessui/react'
import { BellIcon, BoltIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// components
import Logo from './Logo'

// utils
import classNames from '../../../utils/classNames'
import SearchBar from '../../common/SearchBar'

// data
import ProfileDropdown from './ProfileDropdown'
import MobileMenuButton from './MobileMenuButton'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
    <Popover
      as='header'
      className={({ open }) =>
        classNames(
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '', // add overflow-hidden to prevent double scrollbars
          'bg-cyan dark:bg-gray-900 shadow-sm lg:static lg:overflow-y-visible'
        )
      }
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12'>
              <div className='flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2'>
                <Logo />
              </div>
              <SearchBar />
              <MobileMenuButton open={open} />
              <div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
                <Link
                  href='#'
                  className='ml-5 flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BoltIcon className='h-6 w-6' aria-hidden='true' />
                </Link>
                <Link
                  href='#'
                  className='ml-5 flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <TrophyIcon className='h-6 w-6' aria-hidden='true' />
                </Link>

                <ProfileDropdown />

                <Link
                  href='#'
                  className='ml-6 inline-flex items-center rounded-md border border-transparent bg-orange px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                >
                  New Game
                </Link>
              </div>
            </div>
          </div>
          <MobileNav />
        </>
      )}
    </Popover>
  )
}

export default NavBar