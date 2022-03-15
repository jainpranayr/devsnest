import Link from 'next/link'
import { Layout } from '../components'

const PageNotFound = () => {
  return (
    <Layout title='Page Not Found - Devsnest'>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-140px)]'>
        <div className='text-center'>
          <p className='text-sm font-semibold text-red-400 uppercase tracking-wide mt-2'>
            404 error
          </p>
          <h1 className='mt-1 text-4xl font-extrabold text-white tracking-tight sm:text-5xl'>
            Page not found.
          </h1>
          <p className='mt-2 text-base text-gray-500'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className='mt-6'>
            <a
              href='#'
              className='text-base font-medium text-indigo-600 hover:text-indigo-500'>
              Go back home<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </div>
      </main>
      <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex justify-center space-x-4'>
          <a
            href='#'
            className='text-sm font-medium text-gray-500 hover:text-gray-600'>
            Contact Support
          </a>
          <span
            className='inline-block border-l border-gray-300'
            aria-hidden='true'
          />
          <a
            href='#'
            className='text-sm font-medium text-gray-500 hover:text-gray-600'>
            Status
          </a>
          <span
            className='inline-block border-l border-gray-300'
            aria-hidden='true'
          />
          <a
            href='#'
            className='text-sm font-medium text-gray-500 hover:text-gray-600'>
            Twitter
          </a>
        </nav>
      </footer>
    </Layout>
  )
}

export default PageNotFound
