// packages

// components
import { Section, ItemList, Aside, Layout } from '../components/common'
import HighlightMatch from '../components/HighlightMatch'
import TournamentCard from '../components/TournamentCard'
import Headlines from '../components/Headlines'
import { HomeLayout } from '../components/HomeLayout'

// data
import { currentMatch, tournaments } from '../data.test'

// types
import type { TArticle } from '../types/TArticle'
import type { ReactElement } from 'react'

export type TProps = { articles: TArticle[] }

const Home = ({ articles }: TProps) => (
    <>
        <main className='lg:col-span-9 xl:col-span-6'>
            <ItemList>
                {tournaments.map((each) => {
                    return <TournamentCard tournament={each} key={each.id} />
                })}
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

export async function getStaticProps() {
    const articleRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=${process.env.NEWSAPI_KEY}`
    ).then((res) => res.json())

    const { articles } = articleRes

    return {
        props: {
            articles,
        },
    }
}

export default Home
