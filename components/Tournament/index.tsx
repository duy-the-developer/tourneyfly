import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'
import classNames from '../../utils/classNames'
import Link from 'next/link'

type TTournament = {
  id: number
  title: string
  startDate: string
  status: string
  teamNum: number
}

const Tournament = ({ tournament }: { tournament: TTournament }) => {
  const { id, title, startDate, status, teamNum } = tournament
  return (
    <li key={id} className='bg-purple rounded-lg'>
      <Link
        href={`/tournament/${tournament.id}`}
        className='block hover:bg-dpurple rounded-lg'
      >
        <div className='px-4 py-4 sm:px-6'>
          <div className='flex items-center justify-between'>
            <h1 className='truncate text-xl font-lg text-aqua'>{title}</h1>
            <div className='ml-2 flex flex-shrink-0'>
              <p
                className={classNames(
                  status === 'Completed' && 'bg-orange',
                  status === 'On-going' && 'bg-green',
                  status === 'Upcoming' && 'bg-yellow',
                  'inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-slate-800'
                )}
              >
                {status}
              </p>
            </div>
          </div>
          <div className='mt-2 sm:flex sm:justify-between'>
            <div className='sm:flex'>
              <p className='flex items-center text-sm text-gray-300'>
                <UserGroupIcon
                  className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300'
                  aria-hidden='true'
                />
                {teamNum}
              </p>
            </div>
            <div className='mt-2 flex items-center text-sm text-gray-300 sm:mt-0'>
              <CalendarIcon
                className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300'
                aria-hidden='true'
              />
              <time dateTime={startDate}>{startDate}</time>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Tournament
