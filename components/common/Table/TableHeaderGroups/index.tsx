import { TableHeader } from './TableHeader'
import type { Table } from '@tanstack/react-table'

export const TableHeaderGroups = ({ table }: { table: Table<any> }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className='text-aqua text-sm leading-8'>
          {headerGroup.headers.map((header, i) => (
            <TableHeader header={header} i={i} key={header.id} />
          ))}
        </tr>
      ))}
    </thead>
  )
}
