import Layout from '../components/Layout'
import Aside from '../components/common/Aside'
import ItemList from '../components/common/ItemList'
import Tournament from '../components/Tournament'
import HighlightMatch from '../components/HighlightMatch'
import Section from '../components/common/Section'

import { tournaments } from '../data.test'
import { currentMatch } from '../data.test'
import { useEffect } from 'react'
import Headlines from '../components/Headlines'

const Home = () => {
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
          <Headlines />
        </Section>
      </Aside>
    </Layout>
  )
}

export default Home
