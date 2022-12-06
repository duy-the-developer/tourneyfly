// packages
import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { NameCell } from '../common/Table/NameCell'
import { useState } from 'react'

// data
import { teams } from '../../data.test'
import { Modal, Table } from '../common'

// types
import type { Cell } from '@tanstack/react-table'
export type TData = {
  id: string
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
  const [firstTeam, setFirstTeam] = useState<TData | null>(null)
  const [secondTeam, setSecondTeam] = useState<Partial<TData> | null>(null)
  const [defaultValue, setDefaultValue] = useState<string>('')
  const columnHelper = createColumnHelper<TData>()

  // generate array of column headers sorted by team name alphabetically -> ['name', 'a','b','c',...]
  const headers = [
    ...teams.sort((a, b) => (a.name > b.name ? 1 : -1)).map((each) => each.id),
  ]

  // use headers array + columnHelper from @tanstack/react-table to generate columns
  const columns = [
    // NAME column
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      header: 'NAME',
      cell: ({ row }) => {
        const { name, imageUrl, members } = row.original
        return <NameCell name={name} imageUrl={imageUrl} members={members} />
      },
    }),
    // the rest
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
      // filter out unwanted columns
      .filter((column) => column.id !== ('members' || 'imageUrl' || 'id')),
  ]

  const data: TData[] = teams.map((each) => {
    const { id, name, imageUrl, members, results } = each
    return {
      id,
      name,
      imageUrl,
      members,
      ...results,
    }
  })

  const handleCellClick = (cell: Cell<any, unknown>): void => {
    const {
      column: { id: matchId },
      row: { original: rowData },
    } = cell
    setFirstTeam(rowData)
    const cellValue = cell.getValue()
    setDefaultValue(cellValue as string)
    setSecondTeam(teams.find((each) => each.id === matchId) as Partial<TData>)
    setOpenModal(true)
  }

  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title='Update Results'
        message=''
      >
        {firstTeam && secondTeam && secondTeam.id && (
          <div className='flex justify-between items-center w-full'>
            <div className='w-1/2 h-full text-slate-200 flex items-center justify-center'>
              <Image
                src={firstTeam.imageUrl}
                alt={`team ${firstTeam.name} logo`}
                className='rounded-full'
                width={70}
                height={70}
              />
            </div>
            <div className='flex h-full text-slate-200'>
              <input
                defaultValue={defaultValue ? defaultValue.split('-')[0] : ''}
                className='w-6 bg-slate-800 rounded-lg text-center'
                type='number'
                min={0}
              />
              <span className='text-2xl mx-4'>-</span>
              <input
                defaultValue={defaultValue ? defaultValue.split('-')[1] : ''}
                className='w-6 bg-slate-800 rounded-lg text-center'
                type='number'
                min={0}
              />
            </div>
            <div className='w-1/2 h-full text-slate-200 flex items-center justify-center'>
              <Image
                src={secondTeam.imageUrl!}
                alt={`team ${secondTeam.name} logo`}
                className='rounded-full'
                width={70}
                height={70}
              />
            </div>
          </div>
        )}
      </Modal>
      <Table
        columnData={columns}
        rowData={data}
        defaultSort={[{ id: 'name', desc: false }]}
        handleCellClick={handleCellClick}
      />
    </>
  )
}

export default ScoreBoard
