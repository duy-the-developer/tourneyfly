// components
import Table from '../common/Table'
import { NameCell } from '../common/Table/NameCell'

// data
import { teams } from '../../data.test'

const LeaderBoard = () => {
  const columnsData = [
    { Header: 'NAME', accessor: 'name' },
    { Header: 'W', accessor: 'wins' },
    { Header: 'L', accessor: 'losses' },
    { Header: 'T', accessor: 'ties' },
    { Header: 'Pts', accessor: 'totalPoints' },
  ]

  const rowsData = teams.map(
    ({ name, imageUrl, members, wins, losses, ties, totalPoints }) => {
      return {
        name: <NameCell name={name} imageUrl={imageUrl} members={members} />,
        wins,
        losses,
        ties,
        totalPoints,
      }
    }
  )

  return <Table columnData={columnsData} rowData={rowsData} />
}

export default LeaderBoard
