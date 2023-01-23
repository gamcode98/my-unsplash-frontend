import logoIconDesktop from './../../assets/my-unsplash-logo-desktop.svg'
import logoIconMobile from './../../assets/my-unsplash-logo-mobile.svg'
import barsIcon from './../../assets/bars.svg'
import xMarkIcon from './../../assets/x-mark.svg'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <>
      <header className='w-11/12 mx-auto pt-2 mb-8'>
        <nav className='flex justify-between items-center relative'>
          <div className='flex gap-4 items-center'>
            <picture>
              <source media='(min-width:1024px )' srcSet={logoIconDesktop} />
              <source media='(min-width:375px )' srcSet={logoIconMobile} />
              <img src={logoIconMobile} />
            </picture>
            <input
              className='border border-light-gray rounded-md p-2 focus:outline-none focus:border-black bg-magnifying-glass bg-no-repeat bg-w-20
              bg-custom-position pl-12 w-3/4'
              type='text'
              placeholder='Search by name'
            />
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className='outline-none lg:hidden'>
            <img src={showMenu ? xMarkIcon : barsIcon} width={30} />
          </button>
          <ul className={`absolute left-0 right-0 top-16 bg-white shadow-md p-4 flex flex-col items-center ${showMenu ? 'translate-x-0' : '-translate-x-[120%] md:-translate-x-[150%]'} ease-in duration-300 
        md:w-3/5 md:mx-auto lg:static lg:translate-x-0 lg:flex-row lg:gap-6 lg:w-auto lg:mx-0 lg:shadow-none`}
          >
            <button className='bg-green text-white px-4 py-2 rounded-lg mb-2 lg:mb-0 hover:-translate-y-0.5 ease-linear duration-100 will-change-transform'>Add a photo</button>
            <li className='mb-2 lg:mb-0'>
              <a href='#'>Signup</a>
            </li>
            <li>
              <a href='#'>Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export { Navigation }
