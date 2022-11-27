import TeamCard from '../TeamCard.old'
import Link from 'next/link'

type TTeam = {
  id: string
  name: string
  imageUrl: string
  score: number
}

type TMatch = {
  id: number
  teamA: TTeam
  teamB: TTeam
}

const HighlightMatch = ({ match }: { match: TMatch }) => {
  const { id, teamA, teamB } = match
  return (
    <div className='bg-purple rounded-lg px-4 py-4 shadow sm:px-4 sm:py-4'>
      <p className='bg-green inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-slate-800'>
        LIVE
      </p>
      <ul>
        <li key={match.id}>
          <Link href={`/match/${id}`}>
            <div className='flex justify-evenly  text-white rounded-lg bg-purple  hover:bg-dpurple hover:cursor-pointer'>
              <div className='flex flex-col justify-center items-center space-y-4 w-1/3'>
                <picture>
                  <img
                    src={teamA.imageUrl}
                    alt={`${teamA.name} logo`}
                    className='w-12 h-12 rounded-full'
                  />
                </picture>
                <div>{teamA.name}</div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-lg text-aqua'>
                  {teamA.score} - {teamB.score}
                </div>
              </div>
              <div className='flex flex-col justify-center items-center space-y-4 w-1/3'>
                <picture>
                  <img
                    src={teamB.imageUrl}
                    alt={`${teamB.name} logo`}
                    className='w-12 h-12 rounded-full'
                  />
                </picture>
                <div>{teamB.name}</div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HighlightMatch
