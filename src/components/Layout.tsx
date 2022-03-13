import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface IProps {
  children: ReactNode
  title: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
