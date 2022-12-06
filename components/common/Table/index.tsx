// packages
import { useState, useMemo, useEffect, Dispatch, SetStateAction } from 'react'
import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'

// components
import { TableContainer } from './TableContainer'
import { TableHeaderGroups } from './TableHeaderGroups'

// types
import type { Cell, SortingState } from '@tanstack/react-table'
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
  handleCellClick?: (cell: Cell<any, unknown>) => void
}

export const Table = ({
  columnData,
  rowData,
  defaultSort,
  handleCellClick,
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
          <TableBody table={table} handleClick={handleCellClick} />
        </table>
      </TableContainer>
    </>
  )
}
