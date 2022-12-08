import { Aside, Layout, Section, Container } from '../../components/common'
import { HomeLayout } from '../../components/HomeLayout'

import type { ReactElement } from 'react'

const QuickMatch = () => {
    return (
        <>
            <main className='lg:col-span-9 xl:col-span-6'>
                <Container cStyle='bg-slate-900 bg-opacity-50'>
                    <h1 className='px-4 py-6 text-2xl text-orange'>
                        Quick Match Coming Soon
                    </h1>
                </Container>
            </main>
            <Aside>
                <Section label='highlight'>Section</Section>
            </Aside>
        </>
    )
}

QuickMatch.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            <HomeLayout>{page}</HomeLayout>
        </Layout>
    )
}

export default QuickMatch
