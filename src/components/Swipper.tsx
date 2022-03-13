import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Swipper: React.FC = () => {
  return (
    <section className='mx-auto my-8 md:my-12'>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div className='h-80 md:h-[460px]'>
          <img
            loading='lazy'
            src='https://i.postimg.cc/KvcYcyjd/Featured-Course.png'
            alt='featured-course-1'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='h-80 md:h-[460px]'>
          <img
            loading='lazy'
            src='https://i.postimg.cc/KvcYcyjd/Featured-Course.png'
            alt='featured-course-2'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='h-80 md:h-[460px]'>
          <img
            loading='lazy'
            src='https://i.postimg.cc/KvcYcyjd/Featured-Course.png'
            alt='featured-course-3'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </Carousel>
    </section>
  )
}

export default Swipper
