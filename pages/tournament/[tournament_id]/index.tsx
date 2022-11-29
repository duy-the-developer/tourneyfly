// packages
import { useRouter } from 'next/router'
import {
  ChartBarIcon,
  TableCellsIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

// components
import Aside from '../../../components/common/Aside'
import Layout from '../../../components/Layout'
import LeaderBoard from '../../../components/LeaderBoard'
import Section from '../../../components/common/Section'
import TournamentDetails from '../../../components/TournamentDetails'
import TournamentSchedule from '../../../components/TournamentSchedule'
import PageLayout from '../../../components/PageLayout'

// data
import { tournaments } from '../../../data.test'
import type { ReactElement } from 'react'

// types

const Tournament = () => {
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
    <PageLayout navOptions={navigation}>
      <main className='lg:col-span-9 xl:col-span-6'>
        <LeaderBoard />
      </main>
      <Aside>
        <Section label='Tournament details'>
          <TournamentDetails tournament={tournaments[0]} />
        </Section>
        <Section label='Tournament schedule'>
          <TournamentSchedule />
        </Section>
      </Aside>
    </PageLayout>
  )
}

Tournament.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Tournament
