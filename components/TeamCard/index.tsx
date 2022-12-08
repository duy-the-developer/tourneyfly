import {
    CalendarIcon,
    TrophyIcon,
    UserGroupIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import classNames from '../../utils/classNames'
import Link from 'next/link'

type TTeam = {
    id: number
    name: string
    imageUrl: string
    members: string[]
    totalPlayed: number
    wins: number
    ties: number
    losses: number
    totalPoints: number
}

const TeamCard = ({ team, index }: { team: TTeam; index: number }) => {
    const {
        id,
        name,
        imageUrl,
        members,
        totalPlayed,
        wins,
        ties,
        losses,
        totalPoints,
    } = team
    return (
        <li className='bg-slate-900 rounded-lg'>
            <Link
                href={`/tournament/${id}`}
                className='flex justify-between items-center hover:bg-dpurple rounded-lg px-4 py-4 sm:px-6'
            >
                <div className='flex'>
                    <picture className='mr-4'>
                        <img
                            src={imageUrl}
                            alt={`${name} logo`}
                            className='w-14 h-14 rounded-full'
                        />
                    </picture>
                    <div className='items-center justify-between'>
                        <h1 className='truncate text-xl font-lg text-aqua'>
                            {name}
                        </h1>
                        <div className='sm:flex'>
                            <p className='flex items-center text-sm text-gray-300'>
                                <UsersIcon
                                    className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300'
                                    aria-hidden='true'
                                />
                                {
                                    //TODO: display team members
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <div className='ml-2 flex flex-shrink-0'>
                        <p
                            className={classNames(
                                index === 0 && 'bg-yellow text-slate-900',
                                index === 1 && 'bg-gray-400 text-slate-900',
                                index === 2 && 'bg-amber-800 text-slate-900',
                                index > 2 && 'text-aqua',
                                'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                            )}
                        >
                            <TrophyIcon
                                className='h-5 w-5 flex-shrink-0 text-slate-900'
                                aria-hidden='true'
                            />
                            {index + 1}
                        </p>
                    </div>
                    <div>
                        <p className='text-white text-sm'>
                            Wins: {wins} Ties: {ties} Losses: {losses}
                        </p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default TeamCard
