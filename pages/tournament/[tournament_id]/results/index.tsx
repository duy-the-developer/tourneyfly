// components
import { Layout } from '../../../../components/common'
import ScoreBoard from '../../../../components/ScoreBoard'
import { TournamentLayout } from '../../../../components/TournamentLayout'

// lib
import { getTournamentById } from '../../../../lib/getTournamentById'

// types
import type { ReactElement } from 'react'
import type { TTournament } from '../../../../types'
import type { TTeam } from '../../../../types'
import AddTeamButton from '../../../../components/AddTeamButton'
import { teams } from '../../../../data.test'

type TProps = {
    tournament: TTournament
}

const TournamentResults = ({ tournament }: TProps) => {
    const { teams } = tournament
    return (
        <main className='lg:col-span-9 xl:col-span-10'>
            <ScoreBoard teams={teams as any[]} />
            {teams.length === 0 && <AddTeamButton />}
        </main>
    )
}

TournamentResults.getLayout = (page: ReactElement) => {
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

        return { props }
    } catch (error) {
        console.error(error)
        // TODO: handle error
    }
}

export default TournamentResults
