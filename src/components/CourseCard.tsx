import Image from 'next/image'
import Link from 'next/link'
import { Course, kFormatter } from '../utils'
import {
  AiOutlineUsergroupAdd,
  AiOutlineStar,
  AiOutlineFieldTime,
} from 'react-icons/ai'

interface IProps {
  course: Course
}

const CourseCard: React.FC<IProps> = ({ course }) => {
  return (
    <Link href={`/course/${course.id}`} passHref>
      <div key={course.id} className='group'>
        <div className='bg-slate-800 rounded-lg cursor-pointer'>
          <div className='relative w-full sm:h-32 h-48 rounded-lg'>
            <img
              src={course.image}
              alt={course.title}
              className='w-full h-full object-center object-cover rounded-t-lg'
            />
          </div>
          <div className='px-4 py-2 text-center'>
            <div className='relative mt-1'>
              <h3 className='text-md font-bold text-white truncate'>
                {course.title}
              </h3>
              <div className='flex justify-evenly mt-2 text-[15px] text-gray-100 '>
                <span className='mt-1 flex items-center justify-center gap-1'>
                  <AiOutlineUsergroupAdd />
                  {kFormatter(course.seats_available)}
                </span>
                <p className='mt-1 flex items-center justify-center gap-1'>
                  <AiOutlineStar />
                  {course.rating}
                </p>
                <p className='mt-1 flex items-center justify-center gap-1'>
                  <AiOutlineFieldTime />
                  {course.duration}
                </p>
              </div>
            </div>
            <div className='mt-4 mb-2'>
              <a className='relative flex  py-2 px-8 btn-cta'>Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
