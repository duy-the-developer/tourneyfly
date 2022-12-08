import { format } from 'date-fns'
import { TTournament } from '../../types/TTournament'
import { UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline'

import { classNames, getTournamentStatus } from '../../utils'

const TournamentDetails = ({
    tournament: { name, teams, startDate },
}: {
    tournament: TTournament
}) => {
    const startDateObj = new Date(startDate)
    const startDateAsString = format(startDateObj, 'yyyy-MM-dd')
    const status = getTournamentStatus(startDateObj)

    return (
        <div className='p-2 text-gray-300 dark:bg-gray-900 dark:bg-opacity-50 rounded-lg'>
            <div className='px-4 py-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='truncate text-xl font-lg text-aqua'>
                        {name.toUpperCase()}
                    </h1>
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
                            {teams.length}
                        </p>
                    </div>
                    <div className='mt-2 flex items-center text-sm text-gray-300 sm:mt-0'>
                        <CalendarIcon
                            className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300'
                            aria-hidden='true'
                        />
                        <time dateTime={startDateAsString}>
                            {startDateAsString}
                        </time>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TournamentDetails
