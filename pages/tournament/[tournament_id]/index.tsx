// components
import { Aside, Section, Layout } from '../../../components/common'
import LeaderBoard from '../../../components/LeaderBoard'
import TournamentDetails from '../../../components/TournamentDetails'
import TournamentSchedule from '../../../components/TournamentSchedule'
import { TournamentLayout } from '../../../components/TournamentLayout'

// lib
import { getTournamentById } from '../../../lib/getTournamentById'

// types
import type { ReactElement } from 'react'
import type { TTournament } from '../../../types'
import AddTeamButton from '../../../components/AddTeamButton'

type TProps = {
    tournament: TTournament
}

const Tournament = ({ tournament }: TProps) => {
    return (
        <>
            <main className='lg:col-span-9 xl:col-span-6'>
                <LeaderBoard teams={tournament.teams as any} />
                <AddTeamButton />
            </main>
            <Aside>
                <Section label='Tournament details'>
                    <TournamentDetails tournament={tournament} />
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

export const getServerSideProps = async (context: any) => {
    const { tournament_id } = context.query
    try {
        const [tournament] = await Promise.all([
            getTournamentById(tournament_id as string),
        ])

        const props = {
            tournament: JSON.parse(JSON.stringify(tournament)),
        }

        return { props, revalidate: 60 }
    } catch (error) {
        console.error(error)
        // TODO: handle error
    }
}

export default Tournament
