// packages
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useMemo } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  ColumnDef,
} from '@tanstack/react-table'

// components
import { TableContainer } from './TableContainer'

// utils
import classNames from '../../../utils/classNames'

// types
import type { SortingState } from '@tanstack/react-table'
type TProps = {
  rowData: any[]
  columnData: any[]
  defaultSort: [
    {
      id: string
      desc: boolean
    }
  ]
  [key: string]: any
}

declare module '@tanstack/react-table' {
  //@ts-ignore
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void
  }
}

const defaultColumn: Partial<ColumnDef<any>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue()
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className='bg-transparent w-6'
      />
    )
  },
}

export const Table = ({ columnData, rowData, defaultSort }: TProps) => {
  const [data, setData] = useState(() => [...rowData])
  const [sorting, setSorting] = useState<SortingState>(() => [...defaultSort])
  const columns = useMemo(() => columnData, [])

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return { ...old[rowIndex]!, [columnId]: value }
            }
            return row
          })
        )
      },
    },
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
