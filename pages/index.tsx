// packages

// components
import Aside from '../components/common/Aside'
import ItemList from '../components/common/ItemList'
import Section from '../components/common/Section'
import HighlightMatch from '../components/HighlightMatch'
import Layout from '../components/Layout'
import TournamentCard from '../components/TournamentCard'
import Headlines from '../components/Headlines'

// data
import { currentMatch, tournaments } from '../data.test'

// types
import type { TArticle } from '../types/TArticle'
import type { ReactElement } from 'react'
import PageLayout from '../components/PageLayout'

type TProps = { articles: TArticle[] }

const Home = ({ articles }: TProps) => {
  return (
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
}

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <PageLayout>{page}</PageLayout>
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
