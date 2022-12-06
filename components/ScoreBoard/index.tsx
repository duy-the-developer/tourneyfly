// packages
import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { NameCell } from '../common/Table/NameCell'
import { useState } from 'react'

// data
import { teams } from '../../data.test'
import { Row } from 'react-table'
import { Modal, Table } from '../common'

// types
export type TData = {
  name: string
  imageUrl: string
  members: string[]
  a: string | null
  b: string | null
  c: string | null
  d: string | null
  e: string | null
  f: string | null
  g: string | null
  h: string | null
}

const ScoreBoard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const columnHelper = createColumnHelper<TData>()

  // generate array of column headers sorted by team name alphabetically -> ['name', 'a','b','c',...]
  const headers = [
    ...teams.sort((a, b) => (a.name > b.name ? 1 : -1)).map((each) => each.id),
  ]

  // use headers array + columnHelper from @tanstack/react-table to generate columns

  const nameColumn = {
    id: 'name',
    cell: ({ row }: { row: Row<TData> }) => {
      const { name, imageUrl, members } = row.original
      return <NameCell name={name} imageUrl={imageUrl} members={members} />
    },
    header: 'NAME',
  }

  const columns = [
    nameColumn,
    ...headers
      .map((key) => {
        return columnHelper.accessor((row) => row[key as keyof typeof row], {
          id: key,
          header: ({ column: { id } }) => {
            return (
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
      .filter((column) => column.id !== 'members' && column.id !== 'imageUrl'),
  ]

  const data: TData[] = teams.map((each) => {
    const { name, imageUrl, members, results } = each
    return {
      name,
      imageUrl,
      members,
      ...results,
    }
  })

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} />
      <Table
        columnData={columns}
        rowData={data}
        defaultSort={[{ id: 'name', desc: false }]}
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export default ScoreBoard
