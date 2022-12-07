// components
import { Layout } from '../../../../components/common'
import ScoreBoard from '../../../../components/ScoreBoard'

// data
import { teams } from '../../../../data.test'

// types
import { ReactElement } from 'react'
import { TournamentLayout } from '../../../../components/TournamentLayout'

const TournamentResults = () => {
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
