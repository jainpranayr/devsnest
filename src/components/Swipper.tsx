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
        <div className='h-80 md:h-96'>
          <img
            loading='lazy'
            src='https://source.unsplash.com/random'
            alt='slider-1'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='h-80 md:h-96'>
          <img
            loading='lazy'
            src='https://source.unsplash.com/random'
            alt='slider-2'
            className='w-full h-full object-cover'
          />
        </div>
      </Carousel>
    </section>
  )
}

export default Swipper