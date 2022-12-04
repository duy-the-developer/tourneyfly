// packages
import { useRouter } from 'next/router'
import {
  ChartBarIcon,
  TableCellsIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

// components
import { Layout } from '../../../../components/common'
import ScoreBoard from '../../../../components/ScoreBoard'

// types
import { ReactElement } from 'react'
import { TournamentLayout } from '../../../../components/TournamentLayout'

const TournamentResults = () => {
  const router = useRouter()
  const { tournament_id } = router.query
  const navigation = {
    main: [
      {
        name: 'Leaderboard',
        href: `/tournament/${tournament_id}`,
        icon: ChartBarIcon,
        current: true,
        type: 'button',
      },
      {
        name: 'Results',
        href: `/tournament/${tournament_id}/results`,
        icon: TableCellsIcon,
        current: false,
      },
      {
        name: 'Teams',
        href: `/tournament/${tournament_id}/teams`,
        icon: UserGroupIcon,
        current: false,
      },
      {
        name: 'Players',
        href: `/tournament/${tournament_id}/teams`,
        icon: UsersIcon,
        current: false,
      },
    ],
    sub: [
      { name: 'Movies', href: '#' },
      { name: 'Food', href: '#' },
      { name: 'Sports', href: '#' },
      { name: 'Animals', href: '#' },
      { name: 'Science', href: '#' },
      { name: 'Dinosaurs', href: '#' },
      { name: 'Talents', href: '#' },
      { name: 'Gaming', href: '#' },
    ],
  }

  return (
    <>
      <main className='lg:col-span-9 xl:col-span-10'>
        <ScoreBoard />
      </main>
    </>
  )
}

TournamentResults.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <TournamentLayout>{page}</TournamentLayout>
    </Layout>
  )
}

export default TournamentResults
