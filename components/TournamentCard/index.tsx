import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'
import classNames from '../../utils/classNames'
import Link from 'next/link'

import { TTournament } from '../../types/TTournament'

const TournamentCard = ({ tournament }: { tournament: TTournament }) => {
  const { id, title, startDate, status, teamNum } = tournament
  return (
    <li className='transition hover:dark:bg-purple hover:-translate-y-1 hover:scale-105 dark:bg-slate-900 dark:bg-opacity-50 rounded-lg'>
      <Link href={`/tournament/${id}`} className='block rounded-lg'>
        <div className='px-4 py-4 sm:px-6'>
          <div className='flex items-center justify-between'>
            <h1 className='truncate text-xl font-lg text-aqua'>{title}</h1>
            <div className='ml-2 flex flex-shrink-0'>
              <p
                className={classNames(
                  status === 'Completed' && 'bg-orange',
                  status === 'In progress' && 'bg-green',
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

export default TournamentCard