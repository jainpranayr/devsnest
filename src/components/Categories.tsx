import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../utils'

const Categories: React.FC = () => {
  return (
    <section className='text-gray-200 my-8 md:my-12'>
      <div className='xl:max-w-7xl xl:mx-auto xl:px-8 py-1'>
        <div className='sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0 mb-4'>
          <h2 className='text-lg md:text-2xl font-bold text-gray-200'>
            Courses by category
          </h2>
          <Link href='/courses/all' passHref>
            <a className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'>
              Browse all courses<span> &rarr;</span>
            </a>
          </Link>
        </div>

        <div className='mt-4'>
          <div className='-my-2'>
            <div className='box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible scrollbar-hide'>
              <div className='absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8'>
                {categories.map(category => (
                  <Link
                    key={category.title}
                    href={`/courses/${category.slug}`}
                    passHref>
                    <a className='relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto'>
                      <span className='absolute inset-0'>
                        <Image
                          src={category.image}
                          alt={category.title}
                          layout='fill'
                          className='w-full h-full object-center object-cover'
                        />
                      </span>
                      <span className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50' />
                      <span className='relative mt-auto text-center text-xl font-bold text-white'>
                        {category.title}
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4 px-4 sm:hidden'>
          <Link href='/courses/all' passHref>
            <a className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'>
              Browse all courses<span> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories
