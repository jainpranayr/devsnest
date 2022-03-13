import { useState } from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import { navLinks } from '../utils'

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <nav className='border-b-2 border-slate-700 sticky top-0 right-0 z-10 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 py-2 sm:px-10 lg:px-8'>
        <div className='flex justify-between'>
          <div className='flex space-x-7 items-center'>
            {/* logo */}
            <Link href='/' passHref>
              <div>
                <p className='flex px-2 cursor-pointer'>
                  <span className='font-semibold text-indigo-500 text-lg'>
                    Devsnest
                  </span>
                </p>
              </div>
            </Link>

            {/* NavLinks */}
            <div className='hidden md:flex items-center space-x-1 '>
              {navLinks.map(link => (
                <Link href={link.href} passHref key={link.name}>
                  <a className='py-4 px-2 text-gray-400 hover:text-gray-100 font-medium text-sm cursor-pointer'>
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className='hidden md:flex items-center space-x-3 '>
            <a className='py-2 px-2 font-medium text-sm text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded cursor-pointer'>
              Log In
            </a>
            <a className='btn-cta'>Sign Up</a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className='md:hidden'>
            <button
              className='outline-none'
              onClick={() => setNavOpen(!navOpen)}>
              <HiMenuAlt3 className='h-6 w-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div className='block md:hidden'>
        <ul className={navOpen ? 'block z-10' : 'hidden'}>
          {navLinks.map(link => (
            <Link href={link.href} key={link.name}>
              <a className='block text-sm px-12 py-2 font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 cursor-pointer'>
                {link.name}
              </a>
            </Link>
          ))}
          <li>
            <div className='flex flex-row items-center justify-around px-12 py-2'>
              <p className='p-2 font-medium text-sm text-gray-400  hover:text-gray-100 hover:bg-gray-800 rounded cursor-pointer'>
                Log In
              </p>
              <p className='btn-cta'>Sign Up</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
