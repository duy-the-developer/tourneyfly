import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from '../../../../../utils/classNames'
import { flexRender } from '@tanstack/react-table'
import type { Header } from '@tanstack/react-table'

export const TableHeader = ({
  header,
  i,
}: {
  header: Header<any, unknown>
  i: number
}) => {
  return (
    <th
      className={`${classNames(
        i === 0 ? 'text-left' : 'text-center',
        header.column.getCanSort() ? 'cursor-pointer select-none' : ''
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
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: <ChevronUpIcon className='w-5 h-5 ml-1' />,
            desc: <ChevronDownIcon className='w-5 h-5 ml-1' />,
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </th>
  )
}
