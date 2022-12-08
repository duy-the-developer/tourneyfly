// packages
import { Popover } from '@headlessui/react'
import { BoltIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

// components
import Logo from './Logo'
import { Button } from '../../../common'
import ProfileDropdown from './ProfileDropdown'
import MobileMenuButton from './MobileMenuButton'
import MobileNav from './MobileNav'
import SearchBar from './SearchBar'

// utils
import { classNames } from '../../../../utils'

// data

// types
import { TMainNav, TSubNav } from '../../../../types/TNavigation'
import { useRouter } from 'next/router'
import { UserNavigation } from './UserNavigation'
type TProps = {
    navigation: TMainNav
}

const NavBar = ({ navigation }: TProps) => {
    const { user } = useUser()
    const { pathname } = useRouter()

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
                                    className={classNames(
                                        pathname === '/quick-match'
                                            ? 'text-black bg-aqua'
                                            : 'text-aqua hover:text-orange',
                                        'ml-5 flex-shrink-0 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                                    )}
                                >
                                    <span className='sr-only'>Quick match</span>
                                    <BoltIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </Link>
                                <Link
                                    href='/'
                                    className={classNames(
                                        pathname === '/'
                                            ? 'text-black bg-aqua'
                                            : 'text-aqua hover:text-orange',
                                        'ml-5 flex-shrink-0 rounded-full p-1  focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                                    )}
                                >
                                    <span className='sr-only'>Tournaments</span>
                                    <TrophyIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </Link>
                                <UserNavigation user={user} />
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
