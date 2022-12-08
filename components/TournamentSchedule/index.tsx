import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React from 'react'

const TournamentSchedule = () => {
	return (
		<div className="p-4 text-gray-300 dark:bg-slate-900 dark:bg-opacity-50 rounded-lg">
			<div className="flex items-center space-x-2 text-aqua">
				<CalendarDaysIcon className="h-5 w-5" />
				<h1>Schedule</h1>
			</div>
		</div>
	)
}

export default TournamentSchedule
