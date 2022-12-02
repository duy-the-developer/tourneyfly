import { ReactElement } from 'react'
import {
  Layout,
  Container,
  Aside,
  Section,
  PageLayout,
} from '../components/common'
import Headlines from '../components/Headlines'
import HighlightMatch from '../components/HighlightMatch'
import { HomeLayout } from '../components/HomeLayout'

import { currentMatch } from '../data.test'
import { TArticle } from '../types/TArticle'

const Custom404 = ({ articles }: { articles: TArticle[] }) => {
  return (
    <>
      <main className='lg:col-span-9 xl:col-span-6'>
        <Container cStyle='bg-slate-900 bg-opacity-50'>
          <h1 className='px-4 py-6 text-2xl text-orange'>
            404 | Page Not Found
          </h1>
        </Container>
      </main>
      <Aside>
        <Section label='highlight'>
          <HighlightMatch match={currentMatch} />
        </Section>
        <Headlines articles={articles} />
      </Aside>
    </>
  )
}

Custom404.getLayout = (page: ReactElement) => {
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

export default Custom404
