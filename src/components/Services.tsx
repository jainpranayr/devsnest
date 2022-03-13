import { services } from '../utils'

const Services: React.FC = () => {
  return (
    <section className='py-8'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-6'>
          <h2 className='text-3xl font-extrabold text-gray-200'>
            Our Services
          </h2>
          <p className='mt-2 mb-7 text-lg text-gray-500'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
          {services.map(service => (
            <div key={service.name} className='relative group'>
              <div className='absolute inset-0 bg-indigo-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <div className='bg-slate-900 p-6 rounded-lg cursor-default relative'>
                <dt>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-gray-200 '>
                    <service.icon className='h-6 w-6' />
                  </div>
                  <p className='mt-5 text-lg leading-6 font-medium text-gray-200'>
                    {service.name}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-400'>
                  {service.description}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Services
