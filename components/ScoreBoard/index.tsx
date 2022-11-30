import React, { useMemo } from 'react'
import { useTable } from 'react-table'

import { teams } from '../../data.test'

const ScoreBoard = () => {
  const columnsData = [
    { Header: 'name', accessor: 'name' },
    { Header: 'a', accessor: 'a' },
    { Header: 'b', accessor: 'b' },
    { Header: 'c', accessor: 'c' },
    { Header: 'd', accessor: 'd' },
    { Header: 'e', accessor: 'e' },
    { Header: 'f', accessor: 'f' },
    { Header: 'g', accessor: 'g' },
    { Header: 'h', accessor: 'h' },
  ]

  const rowsData = teams.map((each) => {
    return { name: each.name, ...each.results }
  })

  const columns = useMemo(() => columnsData, [])
  const data = useMemo(() => rowsData, [])

  const tableInstance = useTable({
    // @ts-ignore
    columns,
    data,
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((col) => (
              <th {...col.getHeaderProps()}>{col.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ScoreBoard
