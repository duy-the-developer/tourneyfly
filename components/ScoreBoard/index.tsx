// packages
import { createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { NameCell } from '../common/Table/NameCell'
import { useState } from 'react'

// data
import { teams } from '../../data.test'
import { Modal, Table } from '../common'

// types
import type { ColumnDef, Cell } from '@tanstack/react-table'
import { UpdateDiaglog } from './UpdateDialog'

export type TUpdateParams = {
    rowIndex: number
    columnId: string
    value: string
}

export type TData = {
    id: string
    name: string
    imageUrl: string
    members: string[]
    a: string | null
    b: string | null
    c: string | null
    d: string | null
    e: string | null
    f: string | null
    g: string | null
    h: string | null
}

const columnHelper = createColumnHelper<TData>()

const rowData: TData[] = teams.map((each) => {
    const { id, name, imageUrl, members, results } = each
    return {
        id,
        name,
        imageUrl,
        members,
        ...results,
    }
})

// generate array of column headers sorted by team name alphabetically -> ['925ers','Al Capowned','C-Suite Champs',...]
const headers = [
    ...teams.sort((a, b) => (a.name > b.name ? 1 : -1)).map((each) => each.id),
]

const teamColumns: ColumnDef<TData, string>[] = headers
    .map((key) =>
        columnHelper.accessor((row) => row[key as keyof typeof row], {
            id: key,
            header: ({ column: { id } }) => <TeamHeader id={id} />,
        })
    )
    // filter out unwanted columns
    .filter((column) => column.id !== ('members' || 'imageUrl' || 'id'))

// use headers array + columnHelper from @tanstack/react-table to generate columns
const allColumns: ColumnDef<TData, string>[] = [
    // NAME column
    columnHelper.accessor((row) => row.name, {
        id: 'name',
        header: 'NAME',
        cell: ({
            row: {
                original: { name, imageUrl, members },
            },
        }) => <NameCell name={name} imageUrl={imageUrl} members={members} />,
    }),
    // the rest
    ...teamColumns,
]

const TeamHeader = ({ id }: { id: string }) => (
    <div className='flex justify-center'>
        <Image
            src={teams.find((team) => team.id === id)!.imageUrl}
            alt={`team ${id} logo`}
            className='rounded-full'
            width={30}
            height={30}
        />
    </div>
)

const ScoreBoard = () => {
    const [data, setData] = useState(() => [...rowData])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [firstTeam, setFirstTeam] = useState<TData | null>(null)
    const [secondTeam, setSecondTeam] = useState<Partial<TData> | null>(null)
    const [firstTeamScore, setFirstTeamScore] = useState<number>(0)
    const [secondTeamScore, setSecondTeamScore] = useState<number>(0)
    const [rowIndex, setRowIndex] = useState<number | null>(null)
    const [columnId, setColumnId] = useState<string | null>(null)

    const handleCellClick = ({
        column: { id: columnId },
        row: { original: rowData, index },
        getValue,
    }: Cell<any, unknown>): void => {
        // return early if teamA and teamB are the same team
        if (columnId === rowData.id) return

        const cellValue = getValue() as string
        setFirstTeam(rowData)
        setRowIndex(index)
        setColumnId(columnId)
        setFirstTeamScore(Number(cellValue.split('-')[0]))
        setSecondTeamScore(Number(cellValue.split('-')[1]))
        setSecondTeam(
            teams.find((each) => each.id === columnId) as Partial<TData>
        )
        setOpenModal(true)
    }

    const handleCellUpdate = () => {
        const updateRowData = (prev: any[]) =>
            prev.map((row, index) => {
                // update the inverse result
                if (row.id === columnId) {
                    return {
                        ...row,
                        [firstTeam!
                            .id]: `${secondTeamScore!.toString()}-${firstTeamScore!.toString()}`,
                    }
                }

                // update the result
                return index === rowIndex
                    ? {
                          ...row,
                          [columnId as string]: `${firstTeamScore!.toString()}-${secondTeamScore!.toString()}`,
                      }
                    : row
            })

        setData(updateRowData)
    }

    return (
        <>
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                title='Update Results'
                message=''
                okayLabel='Update'
                handleOkay={handleCellUpdate}
            >
                {firstTeam && secondTeam && secondTeam.id && (
                    <UpdateDiaglog
                        firstTeam={firstTeam}
                        secondTeam={secondTeam}
                        firstTeamScore={firstTeamScore}
                        secondTeamScore={secondTeamScore}
                        setFirstTeamScore={setFirstTeamScore}
                        setSecondTeamScore={setSecondTeamScore}
                    />
                )}
            </Modal>
            <Table
                columnData={allColumns}
                rowData={data}
                defaultSort={[{ id: 'name', desc: false }]}
                handleCellClick={handleCellClick}
            />
        </>
    )
}

export default ScoreBoard
