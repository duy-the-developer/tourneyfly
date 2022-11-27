import Aside from '../../components/common/Aside'
import Layout from '../../components/Layout'
import ItemList from '../../components/common/ItemList'
import Match from '../../components/Match'

import { questions } from '../../data.test'

const Tournament = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <h1 className='text-aqua'>TOURNAMENT PAGE COMING SOON</h1>
        {/* <ItemList>{
          questions.map((question) => {
            return <Match question={question} key={question.id}/>
          }) 
          }
        </ItemList> */}
      </main>
      <Aside>
        <h1 className='text-aqua'>Aside</h1>
      </Aside>
    </Layout>
  )
}

export default Tournament 
