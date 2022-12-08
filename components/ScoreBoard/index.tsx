// packages
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

// data
import { Modal, Table } from '../common'
import { useTableData } from '../../hooks/useTableData'

// types
import type { Cell } from '@tanstack/react-table'
import { UpdateDiaglog } from './UpdateDialog'
import type { TTeam } from '../../types'
import { useRouter } from 'next/router'

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

type TProps = {
	tournament_id: string
	teams: TTeam[]
	ownerEmail: string
}

const ScoreBoard = ({ tournament_id, teams, ownerEmail }: TProps) => {
	const router = useRouter()
	const { user } = useUser()
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
		if (columnId === rowData._id) return
		// return early if user is not the owner
		if (user?.email !== ownerEmail) return

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

	const handleScoreUpdate = async (e: Event) => {
		e.preventDefault()
		// return early if conditions are not met
		if (!firstTeam || !secondTeam || !firstTeamScore || !secondTeamScore)
			return
		if (
			typeof firstTeamScore !== 'number' ||
			typeof secondTeamScore !== 'number'
		)
			return

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

		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				tournament_id,
				firstTeamId: firstTeam!._id,
				secondTeamId: secondTeam!._id,
				firstTeamScore,
				secondTeamScore,
			}),
		}

		const response = await fetch(
			'/api/tournaments/update-results',
			fetchOptions
		)

		if (response.status === 200) {
			// trigger revalidation
			router.replace(router.asPath)
		} else {
			console.log('Error adding team to tournament')
		}

		setOpenModal(false)
	}

	return (
		<>
			<Modal
				open={openModal}
				setOpen={setOpenModal}
				title="Update Results"
				message=""
				okayLabel="Update"
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
