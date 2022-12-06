// components
import { Aside, Section, Layout } from '../../../components/common'

import LeaderBoard from '../../../components/LeaderBoard'
import TournamentDetails from '../../../components/TournamentDetails'
import TournamentSchedule from '../../../components/TournamentSchedule'

// data
import { tournaments } from '../../../data.test'
import type { ReactElement } from 'react'
import { TournamentLayout } from '../../../components/TournamentLayout'

// types

const Tournament = () => {
  return (
    <>
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
    </>
  )
}

Tournament.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <TournamentLayout>{page}</TournamentLayout>
    </Layout>
  )
}

export default Tournament
