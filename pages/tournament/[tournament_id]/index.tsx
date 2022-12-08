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
                <LeaderBoard />
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
        // since we are using getStaticProps, we can fetch data at build time // these functions will not be included in the client bundle
        // that means you can write code such as direct database queries without sending them to the client

        // use Promise.all to fetch data in parallel
        const [tournament] = await Promise.all([
            // getArticles(),
            getTournamentById(tournament_id as string),
        ])

        return {
            props: {
                // articles,
                tournament: JSON.parse(JSON.stringify(tournament)),
            },
        }
    } catch (error) {
        console.error(error)
        // TODO: handle error
    }
}

export default Tournament
