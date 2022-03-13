import { footer } from '../utils'

const Footer: React.FC = () => {
  return (
    <footer
      className='bg-slate-900 border-t-2 border-slate-700'
      aria-labelledby='footer-heading'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-10 lg:px-8'>
        <div className='border-gray-200 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {footer.map(item => (
              <a key={item.name} className='text-gray-400 hover:text-gray-100'>
                <item.icon className='h-6 w-6 cursor-pointer' />
              </a>
            ))}
          </div>
          <p className='mt-4 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2022 Devsnest All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
