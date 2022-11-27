import Layout from '../components/Layout'
import Container from '../components/common/Container'
import Aside from '../components/common/Aside'
import Section from '../components/common/Section'
import HighlightMatch from '../components/HighlightMatch'
import Headlines from '../components/Headlines'

import { currentMatch } from '../data.test'
import { TArticle } from './types'

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

const NotFound = ({ articles }: { articles: TArticle[] }) => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <Container cStyle='bg-purple'>
          <h1 className='px-4 py-6 text-2xl text-orange'>
            404 | Page Not Found
          </h1>
        </Container>
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

export default NotFound
