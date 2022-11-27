import Layout from '../components/Layout'
import Aside from '../components/common/Aside'
import MatchList from '../components/common/MatchList'

const Home = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'></main>
      <Aside />
    </Layout>
  )
}

export default Home
