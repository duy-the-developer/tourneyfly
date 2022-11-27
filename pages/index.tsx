import Layout from '../components/Layout'
import Aside from '../components/common/Aside'
import ItemList from '../components/common/ItemList'
import Tournament from '../components/Tournament'
import HighlightMatch from '../components/HighlightMatch'
import Section from '../components/common/Section'

import { tournaments } from '../data.test'
import { currentMatch } from '../data.test'
import Headlines from '../components/Headlines'

import type { TArticle } from './types'

export async function getStaticProps() {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=10&apiKey=f6b58af0a5124be2bf14ae6aaad10d6d'
  )
  const parsedRes = await response.json()
  const { articles } = parsedRes
  return {
    props: {
      articles,
    },
  }
}

const Home = ({ articles }: { articles: TArticle[] }) => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <ItemList>
          {tournaments.map((each) => {
            return <Tournament tournament={each} key={each.id} />
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

export default Home
