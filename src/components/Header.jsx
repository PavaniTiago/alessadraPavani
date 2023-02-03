import React from 'react'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex w-screen h-screen bg-neutral-900 relative font-roboto'>  
            <img className='w-full brightness-50 blur-sm mt-1' src="/src/assets/bgImg.jpg" />
            <div className='text-white absolute flex flex-col items-center h-[28rem] 3xl:h-[34rem] 3xl:w-[50rem] w-[40rem] justify-center ml-48 mt-[10rem]'>
              <h2 className='text-7xl mb-8 font-inter 3xl:text-8xl'>Studio Alessandra Pavani</h2>    
              <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius labore ut
              quibusdam culpa? Earum optio accusantium magni aliquid 
              laboriosam saepe iste dicta aperiam, minus quia culpa tempore fuga nesciunt?
              </p>
              <Link className='text-white mt-4 flex self-end bg-neutral-800 w-32 h-12 items-center justify-center rounded-lg 
              transition ease-in-out hover:-translate-y-1 hover:scale-x-105 duration-200 hover:bg-zinc-900 shadow-xl'
              to='/studio'
              >Saiba mais</Link>
            </div>
    </header>
  )
}
