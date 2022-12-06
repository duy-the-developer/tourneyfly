import { TableHeader } from './TableHeader'
import type { CoreHeaderGroup, Table } from '@tanstack/react-table'

export const TableHeaderGroups = ({ table }: { table: Table<any> }) => {
    const createHeaderGroup = (headerGroup: CoreHeaderGroup<any>) => (
        <tr key={headerGroup.id} className='text-aqua text-sm leading-8'>
            {headerGroup.headers.map((header, i) => (
                <TableHeader header={header} i={i} key={header.id} />
            ))}
        </tr>
    )

    return <thead>{table.getHeaderGroups().map(createHeaderGroup)}</thead>
}
