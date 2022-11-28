// packages
import {
  ChartBarIcon,
  TableCellsIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

// components
import Aside from '../../components/common/Aside'
import Layout from '../../components/Layout'
import LeaderBoard from '../../components/LeaderBoard'
import Section from '../../components/common/Section'
import TournamentDetails from '../../components/TournamentDetails'
import TournamentSchedule from '../../components/TournamentSchedule'

// data
import { tournaments } from '../../data.test'

const Tournament = () => {
  const navigation = {
    main: [
      { name: 'Leader Board', href: '/', icon: ChartBarIcon, current: true },
      {
        name: 'Results',
        href: '/quick-match',
        icon: TableCellsIcon,
        current: false,
      },
      { name: 'Teams', href: '/teams', icon: UserGroupIcon, current: false },
      { name: 'Players', href: 'players', icon: UsersIcon, current: false },
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
    <Layout navOptions={navigation}>
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
    </Layout>
  )
}

export default Tournament
