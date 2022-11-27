import Aside from '../../components/common/Aside'
import Layout from '../../components/Layout'
import ItemList from '../../components/common/ItemList'
import Match from '../../components/Match'

import { questions } from '../../data.test'

const Home = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <ItemList>{
          questions.map((question) => {
            return <Match question={question} key={question.id}/>
          }) 
          }
        </ItemList>
      </main>
      <Aside />
    </Layout>
  )
}

export default Home
