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
import { TTournament } from '../types/TTournament'

type TProps = { articles: TArticle[] }

const Home = ({ articles }: TProps) => {
  return (
    <Layout>
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
    </Layout>
  )
}

export async function getStaticProps() {
  const articleRes = await fetch(
    'https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=f6b58af0a5124be2bf14ae6aaad10d6d'
  ).then((res) => res.json())

  const { articles } = articleRes

  return {
    props: {
      articles,
    },
  }
}

export default Home
