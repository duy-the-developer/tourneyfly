// packages

// components
import { Section, ItemList, Aside, Layout } from '../components/common'
import HighlightMatch from '../components/HighlightMatch'
import TournamentCard from '../components/TournamentCard'
import Headlines from '../components/Headlines'
import { HomeLayout } from '../components/HomeLayout'

// lib
import { getArticles } from '../lib/getArticles'
import { getTournaments } from '../lib/getTournaments'

// data
import { currentMatch } from '../data.test'

// types
import type { ReactElement } from 'react'
import type { TTournament, TArticle } from '../types'

export type TProps = { articles: TArticle[]; tournaments: TTournament[] }

const Home = ({ articles, tournaments }: TProps) => (
    <>
        <main className='lg:col-span-9 xl:col-span-6'>
            <ItemList>
                {tournaments.map((each) => (
                    <TournamentCard tournament={each} key={each._id} />
                ))}
            </ItemList>
        </main>
        <Aside>
            <Section label='highlight'>
                <HighlightMatch match={currentMatch} />
            </Section>
            <Section label='Top sports headlines from United Kingdom'>
                <Headlines articles={articles} />
            </Section>
        </Aside>
    </>
)

Home.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
        // since we are using getStaticProps, we can fetch data at build time // these functions will not be included in the client bundle
        // that means you can write code such as direct database queries without sending them to the client

        // use Promise.all to fetch data in parallel
        const [articles, tournaments] = await Promise.all([
            getArticles(),
            getTournaments(),
        ])

        return {
            props: {
                articles,
                tournaments: JSON.parse(JSON.stringify(tournaments)),
            },
        }
    } catch (error) {
        console.error(error)
        // TODO: handle error
    }
}

export default Home
