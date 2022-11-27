import Layout from '../components/Layout'
import Aside from '../components/common/Aside'
import ItemList from '../components/common/ItemList'
import Tournament from '../components/Tournament'

import { tournaments } from '../data.test'

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
      <Aside />
    </Layout>
  )
}

export default Home
