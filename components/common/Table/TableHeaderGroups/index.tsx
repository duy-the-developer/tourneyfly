import { TableHeader } from './TableHeader'
import type { CoreHeaderGroup, Table } from '@tanstack/react-table'

const HeaderRow = ({ headerGroup }: { headerGroup: CoreHeaderGroup<any> }) => {
    const headers = headerGroup.headers.map((header, i) => (
        <TableHeader header={header} i={i} key={header.id} />
    ))

    return <tr className='text-aqua text-sm leading-8'>{headers}</tr>
}

export const TableHeaderGroups = ({ table }: { table: Table<any> }) => {
    const headerRows = table
        .getHeaderGroups()
        .map((headerGroup) => (
            <HeaderRow key={headerGroup.id} headerGroup={headerGroup} />
        ))

    return <thead>{headerRows}</thead>
}
