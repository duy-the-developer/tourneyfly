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
                  )} py-3.5 pl-4 pr-3 font-semibold h-8`}
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
