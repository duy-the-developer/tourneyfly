import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import classNames from '../../../utils/classNames'
import { TableContainer } from './TableContainer'

type THeader = {
  Header: any
  accessor: string
}

type TRow = {
  [key: string]: any
}

type TProps = {
  columnData: THeader[]
  rowData: TRow[]
  sortById?: string
  descending?: boolean
}

const Table = ({ columnData, rowData, sortById, descending }: TProps) => {
  const columns = useMemo(
    () => columnData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const data = useMemo(
    () => rowData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const initialState = sortById
    ? { sortBy: [{ id: sortById, desc: descending }] }
    : { sortBy: [{ id: 'name', desc: false }] }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data,
        // @ts-ignore
        initialState,
      },
      useSortBy
    )

  return (
    <TableContainer>
      <table
        className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-500'
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              // @ts-ignore //! next build throw error even when react-table provide key by default. Adding key prop and ts screams at me.
              key={`tr-${i}`}
              className='text-aqua text-sm leading-8'
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((col, i) => (
                <th
                  // @ts-ignore
                  key={`th-${i}`}
                  scope='col'
                  className={`${classNames(
                    i === 0 ? 'text-left' : 'text-center'
                  )} transition py-3.5 px-3 font-semibold h-8 hover:bg-purple`}
                  // @ts-ignore
                  {...col.getHeaderProps(col.getSortByToggleProps())}
                >
                  <div
                    className={classNames(
                      i === 0 ? 'justify-start' : 'justify-center',
                      'flex items-center'
                    )}
                  >
                    {col.render('Header')}
                    {
                      // @ts-ignore
                      col.isSorted &&
                        // @ts-ignore
                        (col.isSortedDesc ? (
                          <ChevronDownIcon className='w-5 h-5 ml-1' />
                        ) : (
                          <ChevronUpIcon className='w-5 h-5 ml-1' />
                        ))
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-gray-800' {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr
                // @ts-ignore
                key={`tr-${i}`}
                className={`transition ease-out hover:scale-[102%] hover:bg-purple cursor-pointer`}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => (
                  <td
                    // @ts-ignore
                    key={`td-${i}`}
                    className={`${classNames(
                      i === 0 ? 'text-left' : 'text-center'
                    )} whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-200`}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}

export default Table
