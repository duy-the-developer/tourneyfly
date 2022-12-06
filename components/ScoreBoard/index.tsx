// packages
import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { NameCell } from '../common/Table/NameCell'
import { Table } from '../common'

// data
import { teams } from '../../data.test'

// types
type TColumns = {
  name: string
  imageUrl: string
  members: string[]
  a: string
  b: string
  c: string
  d: string
  e: string
  f: string
  g: string
  h: string
}

const ScoreBoard = () => {
  const data = teams.map((each) => {
    const { name, imageUrl, members, results } = each
    return {
      name,
      imageUrl,
      members,
      ...results,
    }
  })

  const columnHelper = createColumnHelper<TColumns>()

  // generate array of column headers sorted by team name alphabetically -> ['name', 'a','b','c',...]
  const headers = [
    'name',
    ...teams.sort((a, b) => (a.name > b.name ? 1 : -1)).map((each) => each.id),
  ]

  // use headers array + columnHelper from @tanstack/react-table to generate columns
  const columns = headers
    .map((key) => {
      return columnHelper.accessor((row) => row[key as keyof typeof row], {
        id: key,
        cell: ({ row, getValue }) => {
          const { name, imageUrl, members } = row.original
          return key === 'name' ? (
            <NameCell name={name} imageUrl={imageUrl} members={members} />
          ) : (
            getValue()
          )
        },
        header: ({ column: { id } }) => {
          return id === 'name' ? (
            id.toUpperCase()
          ) : (
            <div className='flex justify-center'>
              <Image
                src={teams.find((team) => team.id === id)!.imageUrl}
                alt={`team ${id} logo`}
                className='rounded-full'
                width={30}
                height={30}
              />
            </div>
          )
        },
      })
    })
    // filter out imageUrl and members column
    .filter((column) => column.id !== 'members' && column.id !== 'imageUrl')

  return (
    <Table
      columns={columns}
      rowData={data}
      defaultSort={[{ id: 'name', desc: false }]}
    />
  )
}

export default ScoreBoard
