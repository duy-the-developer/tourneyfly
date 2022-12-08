import { createColumnHelper } from '@tanstack/react-table'
import { TeamHeader } from '../components/ScoreBoard/TeamHeader'
import { NameCell } from '../components/common/Table/NameCell'

// types
import type { TData } from '../components/ScoreBoard'
import type { ColumnDef } from '@tanstack/react-table'
import type { TTeam } from '../types'

//TODO: make this hook generic
export const useTableData = (teams: TTeam[]) => {
	const columnHelper = createColumnHelper<TData>()

	const rowData: TData[] = teams.map(
		({ _id, name, country: { imageUrl }, members, results }) => ({
			_id: _id.toString(),
			name,
			imageUrl,
			members,
			...results,
		})
	)

	// generate array of column headers by team _id -> ['925ers','Al Capowned','C-Suite Champs',...]
	const headers = teams.map((each) => each._id)

	const teamColumns: ColumnDef<TData, string>[] = headers
		.map((key) =>
			columnHelper.accessor(
				(row) => row[key.toString() as keyof typeof row],
				{
					id: key.toString(),
					header: ({ column: { id } }) => {
						return <TeamHeader id={id} teams={teams} />
					},
				}
			)
		)
		// filter out unwanted columns
		.filter(({ id }) => id !== ('members' || 'imageUrl' || 'id'))

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
			}) => (
				<NameCell name={name} imageUrl={imageUrl} members={members} />
			),
		}),
		// the rest
		...teamColumns,
	]

	return [rowData, allColumns]
}
