// packages
import { useState } from 'react'

// data
import { Modal, Table } from '../common'
import { useTableData } from '../../hooks/useTableData'

// types
import type { Cell } from '@tanstack/react-table'
import { UpdateDiaglog } from './UpdateDialog'
import type { TTeam } from '../../types'

export type TUpdateParams = {
    rowIndex: number
    columnId: string
    value: string
}

export type TData = {
    _id: string
    name: string
    imageUrl: string
    members: string[]
    [key: string]: any | null
}

const ScoreBoard = ({ teams }: { teams: TTeam[] }) => {
    const [rowData, allColumns] = useTableData(teams)
    const [data, setData] = useState(() => [...rowData])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [firstTeam, setFirstTeam] = useState<TData | null>(null)
    const [secondTeam, setSecondTeam] = useState<TData | null>(null)
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
        setFirstTeamScore(cellValue ? Number(cellValue.split('-')[0]) : 0)
        setSecondTeamScore(cellValue ? Number(cellValue.split('-')[1]) : 0)
        setSecondTeam(
            (data as any).find(
                (team: TTeam) => team._id.toString() === columnId
            )
        )
        setOpenModal(true)
    }

    const handleScoreUpdate = (e: Event) => {
        e.preventDefault()
        const updateRowData = (prev: any[]) =>
            prev.map((row, index) => {
                // update the inverse result
                if (row._id === columnId) {
                    return {
                        ...row,
                        [firstTeam!
                            ._id]: `${secondTeamScore!.toString()}-${firstTeamScore!.toString()}`,
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
        setOpenModal(false)
    }

    return (
        <>
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                title='Update Results'
                message=''
                okayLabel='Update'
                handleOkay={handleScoreUpdate}
            >
                {firstTeam && secondTeam && secondTeam._id && (
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
                handleCellClick={handleCellClick}
            />
        </>
    )
}

export default ScoreBoard
