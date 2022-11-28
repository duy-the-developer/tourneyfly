import Aside from '../../components/common/Aside'
import Layout from '../../components/Layout'

import LeaderBoard from '../../components/LeaderBoard'

import { tournaments } from '../../data.test'

import Section from '../../components/common/Section'
import TournamentDetails from '../../components/TournamentDetails'
import TournamentSchedule from '../../components/TournamentSchedule'

const Tournament = () => {
  return (
    <Layout>
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
