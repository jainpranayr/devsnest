import { testimonials } from '../utils'

const Testimonials = () => {
  return (
    <section className='md:my-24 py-4'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-4'>
          <h3 className='text-3xl font-extrabold text-gray-100 mb-7'>
            What Students say about us?
          </h3>
        </div>

        <div className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className='space-y-1 p-6 rounded-lg bg-slate-800'>
              <blockquote className='mb-3 text-base leading-6 font-base text-white'>
                &quot;{testimonial.text}&quot;
              </blockquote>
              <div className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src={testimonial.image}
                    alt=''
                  />
                  <div className='font-normal text-sm leading-6'>
                    <h3>{testimonial.author}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
