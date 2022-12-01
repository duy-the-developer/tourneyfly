import { ReactElement } from 'react'
import {
  Layout,
  Container,
  Aside,
  Section,
  PageLayout,
} from '../components/common'
import HighlightMatch from '../components/HighlightMatch'
import { HomeLayout } from '../components/HomeLayout'

import { currentMatch } from '../data.test'

const NotFound = () => {
  return (
    <>
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
      </Aside>
    </>
  )
}

NotFound.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <HomeLayout>{page}</HomeLayout>
    </Layout>
  )
}

export default NotFound
