import Layout from '../components/Layout'
import Aside from '../components/common/Aside'
import ItemList from '../components/common/ItemList'

const Home = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <ItemList>{}</ItemList>
      </main>
      <Aside />
    </Layout>
  )
}

export default Home
