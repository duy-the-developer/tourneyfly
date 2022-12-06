import classNames from '../../../../utils/classNames'
import { flexRender, Row } from '@tanstack/react-table'
import type { Table, Cell } from '@tanstack/react-table'

type THandleClick = (cell: Cell<any, unknown>) => void

type TProps = {
    table: Table<any>
    handleClick?: THandleClick
}

export const TableBody = ({ table, handleClick }: TProps) => {
    const Cell = ({ cell, i }: { cell: Cell<any, unknown>; i: number }) => (
        <td
            key={cell.id}
            className={classNames(
                i === 0 ? 'text-left' : 'text-center',
                (handleClick as THandleClick) && 'hover:bg-purple',
                'm-0 p-0 whitespace-nowrap text-sm text-gray-200'
            )}
            onClick={() => handleClick && handleClick(cell)}
        >
            <button
                className={`${classNames(
                    i === 0 ? 'text-left' : 'text-center'
                )} block m-0 w-full h-full whitespace-nowrap p-4 text-sm text-gray-200`}
            >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </button>
        </td>
    )

    const TableRow = ({ row }: { row: Row<any> }) => (
        <tr key={row.id} className={`transition ease-out hover:scale-[102%] cursor-pointer hover:bg-dpurple`}>
            {row.getVisibleCells().map(createCell)}
        </tr>
    )

    const createCell = (cell: Cell<any, unknown>, i: number) => <Cell cell={cell} i={i} />

    const createTableRow = (row: Row<any>) => <TableRow row={row} />

    const tableRows = table.getRowModel().rows.map(createTableRow)

    return <tbody className='divide-y divide-gray-800'>{tableRows}</tbody>
}
