// packages
import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'

// components
import { TableContainer } from './TableContainer'

// utils
import classNames from '../../../utils/classNames'

// types
import type { SortingState } from '@tanstack/react-table'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
type TProps = {
  rowData: any[]
  columns: any[]
  defaultSort: [
    {
      id: string
      desc: boolean
    }
  ]
  [key: string]: any
}

export const Table = ({ columns, rowData, defaultSort }: TProps) => {
  const [data, setData] = useState(() => [...rowData])
  const [sorting, setSorting] = useState<SortingState>(() => [...defaultSort])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <TableContainer>
      <table className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-500'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='text-aqua text-sm leading-8'>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className={`${classNames(
                    i === 0 ? 'text-left' : 'text-center',
                    header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : ''
                  )} transition py-3.5 px-3 font-semibold h-8 hover:bg-purple`}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={classNames(
                        i === 0 ? 'justify-start' : 'justify-center',
                        'flex items-center'
                      )}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ChevronUpIcon className='w-5 h-5 ml-1' />,
                        desc: <ChevronDownIcon className='w-5 h-5 ml-1' />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-gray-800'>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`transition ease-out hover:scale-[102%] hover:bg-purple cursor-pointer`}
            >
              {row.getVisibleCells().map((cell, i) => (
                <td
                  key={cell.id}
                  className={`${classNames(
                    i === 0 ? 'text-left' : 'text-center'
                  )} whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-200`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  )
}
