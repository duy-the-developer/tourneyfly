import Layout from '../components/Layout'
import Container from '../components/common/Container'
import Aside from '../components/common/Aside'

const NotFound = () => {
  return (
    <Layout>
      <main className='lg:col-span-9 xl:col-span-6'>
        <Container cStyle='bg-purple'>
          <h1 className='px-4 py-6 text-2xl text-orange'>
            404 | Page Not Found
          </h1>
        </Container>
      </main>
      <Aside />
    </Layout>
  )
}

export default NotFound
