// packages
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import {
    UserGroupIcon,
    UsersIcon,
    ChartBarIcon,
    TableCellsIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

// components
import { CreateTournamentModal } from '../../../../common/Layout/NavBar/UserNavigation/CreateTournamentModal'
import { Button } from '../../../../common'

// utils
import { classNames } from '../../../../../utils'

// data
import { ProfileImage } from '../../../../common'
import { TMainNav } from '../../../../../types/TNavigation'
import { useUser } from '@auth0/nextjs-auth0'
import { userNavigation } from '../../../../../data.test'

type TProps = {
    navigation: TMainNav
}

const MobileNav = ({ navigation }: TProps) => {
    const [openModal, setOpenModal] = useState(false)
    const router = useRouter()
    const { tournament_id } = router.query
    const { user } = useUser()

    const tournamentNavigation = [
        {
            name: 'Leaderboard',
            href: `/tournament/${tournament_id}`,
            pathname: '/tournament/[tournament_id]',
            icon: <ChartBarIcon className='h-6 w-6' />,
            current: true,
            type: 'button',
        },
        {
            name: 'Results',
            href: `/tournament/${tournament_id}/results`,
            pathname: '/tournament/[tournament_id]/results',
            icon: <TableCellsIcon className='h-6 w-6' />,
            current: false,
        },
    ]

    return (
        <>
            <Popover.Panel
                as='nav'
                className='lg:hidden bg-slate-800 pb-4'
                aria-label='Global'
            >
                <div className='mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4'>
                    {navigation.map((each) => (
                        <Popover.Button
                            as={Link}
                            key={each.name}
                            href={each.href}
                            aria-current={each.current ? 'page' : undefined}
                            className={classNames(
                                each.current
                                    ? 'bg-aqua text-gray-800'
                                    : 'hover:bg-yellow text-aqua hover:text-gray-900',
                                'transition block rounded-md py-2 px-3 text-base font-medium'
                            )}
                        >
                            {each.name}
                        </Popover.Button>
                    ))}
                </div>
                <div className='border-t border-gray-200 pt-4'>
                    <div className='mx-auto flex max-w-3xl items-center px-4 sm:px-6'>
                        <div className='flex-shrink-0'>
                            <ProfileImage cStyle='h-10 w-10' />
                        </div>
                        <div className='ml-3'>
                            <div className='text-base font-medium text-aqua'>
                                {user?.name}
                            </div>
                            <div className='text-sm font-medium text-gray-400'>
                                {user?.email}
                            </div>
                        </div>
                        <div className='w-full flex items-end justify-end'>
                            {tournament_id &&
                                tournamentNavigation.map((each) => (
                                    <Popover.Button
                                        as={Link}
                                        href={each.href}
                                        key={each.name}
                                        type='button'
                                        className='ml-2 flex-shrink-0 rounded-full bg-gray-900 p-1 text-aqua hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                                    >
                                        <span className='sr-only'>
                                            {each.name}
                                        </span>
                                        {each.icon}
                                    </Popover.Button>
                                ))}
                        </div>
                    </div>
                    <div className='mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4'>
                        {userNavigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href || '#'}
                                className='transition block rounded-md py-2 px-3 text-base font-medium text-gray-300 hover:bg-purple hover:text-aqua'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='mx-auto mt-6 max-w-3xl sm:px-6'>
                    <Button
                        cStyle='text-lg w-full bg-gradient-to-br from-aqua to-dpurple duration-300 hover:from-rose-900 hover:via-orange hover:to-rose-200'
                        label='New Game'
                        onClickFunc={() => {
                            setOpenModal(true)
                        }}
                    />
                </div>
            </Popover.Panel>
            <CreateTournamentModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}

export default MobileNav
