import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CourseCard, Layout } from '../../components'
import { Course, courses, Capitalize } from '../../utils'

const CoursesPage = () => {
  const [courseCategory, setCourseCategory] = useState<
    string | string[] | undefined
  >()
  const [courseData, setCourseData] = useState<Course[]>([])

  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    if (category && category?.length >= 3) {
      setCourseCategory(category)
    }

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
      <div className='max-w-2xl mx-auto px-4 sm:px-10 lg:px-8 lg:max-w-7xl my-8 md:my-12'>
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
