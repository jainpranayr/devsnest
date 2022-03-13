import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CourseCard, Layout } from '../../components'
import { Course, courses, Capitalize, categories } from '../../utils'

const CoursesPage = () => {
  const [courseCategory, setCourseCategory] = useState<
    string | string[] | undefined
  >()
  const [courseData, setCourseData] = useState<Course[]>([])

  const router = useRouter()
  const { category } = router.query

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    const selectedCategory = event.target.value
    setCourseCategory(selectedCategory)
  }

  useEffect(() => {
    if (category && category?.length >= 3) {
      setCourseCategory(category)
    }
  }, [category, setCourseCategory])

  useEffect(() => {
    const getCourseData = (category: typeof courseCategory) => {
      if (category === 'all') setCourseData(courses)
      else {
        let res = courses.filter(course => course.category === category)
        setCourseData(res)
      }
    }

    getCourseData(courseCategory)
  }, [courseCategory, category])

  return (
    <Layout
      title={`${
        courseCategory && Capitalize(courseCategory.toString())
      } Courses - Devsnest`}>
      <ul className='flex flex-row px-2 justify-between list-none overflow-scroll scrollbar-hide max-w-full mx-auto'>
        {categories.map(category => (
          <li
            className={`flex text-center justify-center items-center mt-6 cursor-pointer hover:bg-slate-700 rounded ${
              courseCategory === category.slug &&
              'bg-indigo-700 hover:bg-indigo-700 text-white'
            }`}
            key={category.title}>
            <button
              value={category.slug}
              className='block py-2 px-4 font-medium text-xs leading-tight'
              onClick={handleClick}>
              {category.title}
            </button>
          </li>
        ))}
      </ul>

      <div className='max-w-2xl mx-auto px-4 sm:px-10 lg:px-8 lg:max-w-7xl my-4 md:my-8'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {courseData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage
