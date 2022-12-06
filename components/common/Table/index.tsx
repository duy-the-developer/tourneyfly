// packages
import { useState, useMemo, useEffect } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'

// components
import { TableContainer } from './TableContainer'
import { TableHeaderGroups } from './TableHeaderGroups'

// types
import type { SortingState } from '@tanstack/react-table'
import type { Dispatch, SetStateAction } from 'react'
import { TableBody } from './TableBody'
type TProps = {
  rowData: any[]
  columnData: any[]
  defaultSort: [
    {
      id: string
      desc: boolean
    }
  ]
  setOpenModal?: Dispatch<SetStateAction<boolean>>
  [key: string]: any
}

export const Table = ({
  columnData,
  rowData,
  defaultSort,
  setOpenModal,
}: TProps) => {
  const [data, setData] = useState(() => [...rowData])
  const [sorting, setSorting] = useState<SortingState>([])
  const columns = useMemo(() => columnData, [])

  useEffect(() => {
    setSorting(defaultSort)
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <>
      <TableContainer>
        <table className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-500'>
          <TableHeaderGroups table={table} />
          <TableBody table={table} setOpenModal={setOpenModal} />
        </table>
      </TableContainer>
    </>
  )
}
