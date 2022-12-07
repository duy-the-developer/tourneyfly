// packages
import { useState, useMemo, useEffect } from 'react'
import {
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
} from '@tanstack/react-table'

// components
import { TableContainer } from './TableContainer'
import { TableHeaderGroups } from './TableHeaderGroups'

// types
import type { Cell, SortingState } from '@tanstack/react-table'
import { TableBody } from './TableBody'

type TProps = {
    columnData: any[]
    rowData: any[]
    defaultSort: [
        {
            id: string
            desc: boolean
        }
    ]
    handleCellClick?: (cell: Cell<any, unknown>) => void
}

export const Table = ({
    columnData,
    rowData,
    defaultSort,
    handleCellClick,
}: TProps) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const columns = useMemo(() => columnData, [])

    useEffect(() => {
        setSorting(defaultSort)
    }, [])

    const table = useReactTable({
        data: rowData,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <TableContainer>
            <table className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-500'>
                <TableHeaderGroups table={table} />
                <TableBody table={table} handleClick={handleCellClick} />
            </table>
        </TableContainer>
    )
}
