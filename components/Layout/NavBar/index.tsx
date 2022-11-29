// packages
import { Popover } from '@headlessui/react'
import { BoltIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

// components
import Logo from './Logo'
import Button from '../../common/Button'
import ProfileDropdown from './ProfileDropdown'
import MobileMenuButton from './MobileMenuButton'
import MobileNav from './MobileNav'

// utils
import classNames from '../../../utils/classNames'
import SearchBar from '../../SearchBar'

// data

// types
import { TMainNav } from '../../../types/TNavigation'
type TProps = {
  navigation: TMainNav
}

const NavBar = ({ navigation }: TProps) => {
  const { user } = useUser()

  return (
    <Popover
      as='header'
      className={({ open }) =>
        classNames(
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '', // add overflow-hidden to prevent double scrollbars
          'bg-cyan dark:bg-slate-900 shadow-sm lg:static lg:overflow-y-visible'
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
                  href='/quick-match'
                  className='ml-5 flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                >
                  <span className='sr-only'>Quick match</span>
                  <BoltIcon className='h-6 w-6' aria-hidden='true' />
                </Link>
                <Link
                  href='/'
                  className='ml-5 flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                >
                  <span className='sr-only'>Tournaments</span>
                  <TrophyIcon className='h-6 w-6' aria-hidden='true' />
                </Link>

                {user && <ProfileDropdown />}
                {user && (
                  <Button
                    cStyle='bg-gradient-to-br from-aqua to-dpurple transition duration-300 hover:from-rose-900 hover:via-orange hover:to-rose-200 hover:scale-105'
                    label='New Game'
                    onClickFunc={() => {
                      console.log('New Game')
                    }}
                  />
                )}

                {!user && (
                  <Link
                    href='/api/auth/login'
                    className='ml-6 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 bg-gradient-to-br from-aqua to-dpurple transition duration-300 hover:from-rose-900 hover:via-orange hover:to-rose-200 hover:scale-105'
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
          <MobileNav navigation={navigation} />
        </>
      )}
    </Popover>
  )
}

export default NavBar
