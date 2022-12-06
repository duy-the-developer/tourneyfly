// packages
import { createColumnHelper } from '@tanstack/react-table'

// components
import { NameCell } from '../common/Table/NameCell'
import { Table } from '../common'

// data
import { teams } from '../../data.test'

// types
type TTeam = {
  name: string
  imageUrl: string
  members: string[]
  wins: number
  losses: number
  ties: number
  totalPoints: number
}

const LeaderBoard = () => {
  const columnHelper = createColumnHelper<TTeam>()
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

  const data: TTeam[] = teams.map(
    ({ name, imageUrl, members, wins, losses, ties, totalPoints }) => {
      return {
        name,
        imageUrl,
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
      columns={columns}
      rowData={data}
      defaultSort={[{ id: 'Pts', desc: true }]}
    />
  )
}

export default LeaderBoard
