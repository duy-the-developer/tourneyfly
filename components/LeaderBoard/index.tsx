// components
import Table from '../common/Table'
import { NameCell } from '../common/Table/NameCell'

// data
import { teams } from '../../data.test'

const LeaderBoard = () => {
  const columnsData = [
    { Header: 'Name', accessor: 'name' },
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

  return (
    <div className='rounded-lg flex flex-col'>
      <div className='-my-2 overflow-x-auto lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <table className='bg-slate-900 bg-opacity-50 min-w-full divide-y divide-gray-600'>
              <thead className=''>
                <tr className='text-aqua text-sm'>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left font-semibold'
                  >
                    W
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold'
                  >
                    L
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold'
                  >
                    T
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold'
                  >
                    Pts
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-800'>
                {teams.map((each) => (
                  <tr
                    key={each.id}
                    className='transition ease-in-out hover:scale-[103%] hover:bg-purple cursor-pointer'
                  >
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                      <NameCell
                        name={each.name}
                        imageUrl={each.imageUrl}
                        members={each.members}
                      />
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      <div>{each.wins}</div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {each.losses}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {each.ties}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-300'>
                      {each.totalPoints}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
