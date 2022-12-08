// packages
import { createColumnHelper } from '@tanstack/react-table'

// components
import { NameCell } from '../common/Table/NameCell'
import { Table } from '../common'

import type { TTeam } from '../../types'

// types
type TData = {
    name: string
    imageUrl: string
    members: string[]
    wins: number
    losses: number
    ties: number
    totalPoints: number
}

type TProps = { teams: TTeam[] }

const LeaderBoard = ({ teams }: TProps) => {
    const columnHelper = createColumnHelper<TData>()
    const columns = [
        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: ({ row }) => (
                <NameCell
                    name={row.original.name}
                    imageUrl={row.original.imageUrl}
                    members={row.original.members}
                />
            ),
            header: () => 'NAME',
        }),
        columnHelper.accessor((row) => row.wins, {
            id: 'wins',
            header: () => 'W',
        }),
        columnHelper.accessor((row) => row.losses, {
            id: 'losses',
            header: () => 'L',
        }),
        columnHelper.accessor((row) => row.ties, {
            id: 'ties',
            header: () => 'T',
        }),
        columnHelper.accessor((row) => row.totalPoints, {
            header: 'Pts',
        }),
    ]

    const data: TData[] = teams.map(
        ({ name, country, members, wins, losses, ties, totalPoints }) => {
            return {
                name,
                imageUrl: country.imageUrl,
                members,
                wins,
                losses,
                ties,
                totalPoints,
            }
        }
    )

    return (
        <Table
            columnData={columns}
            rowData={data}
            defaultSort={[{ id: 'Pts', desc: true }]}
        />
    )
}

export default LeaderBoard
