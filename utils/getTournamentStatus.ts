import { format, compareAsc } from 'date-fns'

export const getTournamentStatus = (startDate: Date) => {
    const today = new Date()
    const compareDateResult = compareAsc(
        new Date(format(startDate, 'yyyy-MM-dd')),
        new Date(format(today, 'yyyy-MM-dd'))
    )
    let status = compareDateResult === 0 && 'In progress'
    if (compareDateResult === -1) status = 'Completed'
    if (compareDateResult === 1) status = 'Upcoming'

    return status
}
