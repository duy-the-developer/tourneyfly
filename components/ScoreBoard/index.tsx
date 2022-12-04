import Image from 'next/image'
import Table from '../common/Table'
import { NameCell } from '../common/Table/NameCell'

// data
import { teams } from '../../data.test'

const ScoreBoard = () => {
  const columnsData = [
    { Header: 'NAME', accessor: 'name' },
    ...teams.map((each) => ({
      Header: (
        <div className='flex justify-center'>
          <Image
            className='rounded-full'
            width={30}
            height={30}
            src={each.imageUrl}
            alt={`${each.name}-logo`}
          />
        </div>
      ),
      accessor: each.id,
    })),
  ]

  const rowsData = teams.map((each) => {
    return {
      name: (
        <NameCell
          name={each.name}
          imageUrl={each.imageUrl}
          members={each.members}
        />
      ),
      ...each.results,
    }
  })

  return (
    <Table
      columnData={columnsData}
      rowData={rowsData}
      sortById='name'
      descending={false}
    />
  )
}

export default ScoreBoard
