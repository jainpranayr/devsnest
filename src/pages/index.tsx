import type { NextPage } from 'next'
import {
  Categories,
  Services,
  Layout,
  Swipper,
  Testimonials,
  BottomCta,
} from '../components'

const Home: NextPage = () => {
  return (
    <Layout title='Devsnest - The learning environment YOU deserve.'>
      <div className='flex-1 max-w-7xl mx-auto px-4 sm:px-10 lg:px-8 '>
        <Swipper />
        <Services />
        <Categories />
        <Testimonials />
      </div>
      <BottomCta />
    </Layout>
  )
}

export default Home
