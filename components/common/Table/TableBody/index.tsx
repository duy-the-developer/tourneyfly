import { Table } from '@tanstack/react-table'
import classNames from '../../../../utils/classNames'
import { flexRender } from '@tanstack/react-table'

import type { Dispatch, SetStateAction } from 'react'

type TProps = {
  table: Table<any>
  setOpenModal?: Dispatch<SetStateAction<boolean>>
}

export const TableBody = ({ table, setOpenModal }: TProps) => {
  return (
    <tbody className='divide-y divide-gray-800'>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className={`transition ease-out hover:scale-[102%] cursor-pointer hover:bg-dpurple`}
        >
          {row.getVisibleCells().map((cell, i) => (
            <td
              key={cell.id}
              className={`${classNames(
                i === 0 ? 'text-left' : 'text-center'
              )} m-0 p-0 whitespace-nowrap text-sm text-gray-200 hover:bg-purple`}
              onClick={() => setOpenModal && setOpenModal(true)}
            >
              <button
                className={`${classNames(
                  i === 0 ? 'text-left' : 'text-center'
                )} block m-0 w-full h-full whitespace-nowrap p-4 text-sm text-gray-200`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
