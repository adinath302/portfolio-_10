import React from 'react'
import ThemeToggle from './Theme';
import PortfolioStore from './useStore';

const Navbar = () => {
  const theme = PortfolioStore((state) => state.theme);
  return (
    <section className='fixed top-0 left-0 w-full z-50 flex py-0 px-6 items-center bg-transparent backdrop-filter backdrop-saturate-200 backdrop-brightness/50 backdrop-blur-md'>

      <div className='max-w-173 w-full mx-auto flex py-4 px-6 items-center justify-between'>

        <a href='https://x.com/Adinath302' className={`font-semibold ${theme ? 'text-gray-700' : 'text-white'} text-sm hover:border-b-2 border-{theme ? 'gray-700' : 'white'} transition-all duration-300`} target='_blank'>
          <span className=''>
            ~/
          </span>
          adinath.codes
        </a>

        <div className='flex items-center gap-4'>
          <ul className={`flex gap-6 items-center text-[12px]  md:text-[14px]  mr-2.75 ${theme ? 'text-gray-700' : 'text-white'}`}  >
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </section>
  )
}

export default Navbar;

