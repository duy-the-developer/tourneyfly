import { teams } from '../../data.test'

const LeaderBoard = () => {
  return (
    <div className='rounded-lg flex flex-col bg-slate-900 bg-opacity-50'>
      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-600'>
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
                    className='transition hover:scale-105 hover:bg-purple cursor-pointer'
                  >
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                      <div className='flex items-center'>
                        <div className='h-10 w-10 flex-shrink-0'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src={each.imageUrl}
                            alt=''
                          />
                        </div>
                        <div className='ml-4'>
                          <div className='font-medium text-aqua'>
                            {each.name}
                          </div>
                          <div className='text-gray-300'>
                            {each.members.join(' ')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      <div>{each.wins}</div>
                      {/* <div className='text-gray-500'>{each.wins}</div> */}
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
