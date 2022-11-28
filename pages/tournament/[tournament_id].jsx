import Aside from '../../components/common/Aside'
import Layout from '../../components/Layout'

import LeaderBoard from '../../components/LeaderBoard'

import {teams} from '../../data.test' 

const Tournament = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <LeaderBoard/>
      </main>
      <Aside>
        <h1 className='text-aqua'>Aside</h1>
      </Aside>
    </Layout>
  )
}

export default Tournament 
