import { useMemo } from 'react'
import { useTable } from 'react-table'
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
}

const Table = ({ columnData, rowData }: TProps) => {
  const columns = useMemo(() => columnData, [])
  const data = useMemo(() => rowData, [])

  const tableInstance = useTable({
    // @ts-ignore
    columns,
    data,
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <TableContainer>
      <table
        className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-500'
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className='text-aqua text-sm'
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((col, i) => (
                <th
                  scope='col'
                  className={`${classNames(
                    i === 0 ? 'text-left' : 'text-center'
                  )} py-3.5 pl-4 pr-3 font-semibold`}
                  {...col.getHeaderProps()}
                >
                  {col.render('Header')}
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
                className={`transition ease-out hover:scale-[102%] hover:bg-purple cursor-pointer`}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => (
                  <td
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
