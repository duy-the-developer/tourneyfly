import { useState } from 'react'
import { Button } from '../../../../common'
import ProfileDropdown from '../ProfileDropdown'
import { CreateTournamentModal } from './CreateTournamentModal'

import type { UserProfile } from '@auth0/nextjs-auth0'

export const UserNavigation = ({ user }: { user: UserProfile | undefined }) => {
    const [openModal, setOpenModal] = useState(false)
    if (!user)
        <a
            href='/api/auth/login'
            className='ml-6 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 bg-gradient-to-br from-aqua to-dpurple transition duration-300 hover:from-rose-900 hover:via-orange hover:to-rose-200 hover:scale-105'
        >
            Sign In
        </a>

    return (
        <>
            <CreateTournamentModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <ProfileDropdown />
            <Button
                cStyle='bg-gradient-to-br from-aqua to-dpurple transition duration-300 hover:from-rose-900 hover:via-orange hover:to-rose-200 hover:scale-105'
                label='New Game'
                onClickFunc={() => {
                    setOpenModal(true)
                }}
            />
        </>
    )
}
