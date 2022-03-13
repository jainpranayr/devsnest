import { useRouter } from 'next/router'
import { Layout } from '../../components'
import { Capitalize, courses, kFormatter } from '../../utils'
import { HiStar, HiUserGroup, HiUserAdd, HiClock } from 'react-icons/hi'

const CoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query
  const courseData = courses.find(course => course.id === courseId)
  return (
    <Layout
      title={`${courseData?.title && Capitalize(courseData.title)} - Devsnest`}>
      {/* <div className='bg-white'> */}
      <div className='max-w-xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
        {/* Product */}
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
          {/* Product image */}
          <div className='lg:row-end-1 lg:col-span-4'>
            <div className='aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden'>
              <img
                src={courseData?.image}
                alt={courseData?.title}
                className='object-center object-cover'
              />
            </div>
          </div>

          {/* Product details */}
          <div className='max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3'>
            <div className='flex flex-col-reverse'>
              <div className='mt-4'>
                <h1 className='text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl'>
                  {courseData?.title}
                </h1>

                <h2 id='information-heading' className='sr-only'>
                  Product information
                </h2>
              </div>

              <div>
                <h3 className='sr-only'>Reviews</h3>
                <div className='flex items-center text-lg gap-x-4'>
                  <div className='inline-flex items-center justify-center gap-1'>
                    <HiStar className='text-indigo-500' />
                    <p className='text-gray-200'>{courseData?.rating}</p>
                  </div>
                  <div className='inline-flex items-center justify-center gap-1'>
                    <HiUserGroup className='text-indigo-500' />
                    <p className='text-gray-200'>
                      {/* @ts-ignore */}
                      {kFormatter(courseData?.students_enrolled)}
                    </p>
                  </div>
                  <div className='inline-flex items-center justify-center gap-1'>
                    <HiUserAdd className='text-indigo-500' />
                    <p className='text-gray-200'>
                      {/* @ts-ignore */}
                      {kFormatter(courseData?.seats_available)}
                    </p>
                  </div>
                  <div className='inline-flex items-center justify-center gap-1'>
                    <HiClock className='text-indigo-500' />
                    <p className='text-gray-200'>{courseData?.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <p
              className='text-gray-300 mt-6 leading-7'
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: courseData?.description,
              }}></p>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2'>
              <button type='button' className='btn-cta py-3 px-8'>
                {/* @ts-ignore */}
                Pay {kFormatter(courseData?.price)}
              </button>
              <button
                type='button'
                className='bg-indigo-50 text-indigo-700 btn-cta py-3 px-8'>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  )
}

export default CoursePage
