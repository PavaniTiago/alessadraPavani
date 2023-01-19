import React from 'react'

export const Header = () => {
  return (
    <header className='flex w-full h-full bg-neutral-900 relative'>  
            <img className='w-full brightness-50 blur-sm mt-1' src="/src/assets/bgImg.jpg" />
            <div className='text-white absolute flex flex-col items-center h-[24rem] w-[38rem] justify-center ml-48 mt-[10rem]'>
              <h2 className='text-7xl mb-8'>Studio Alessandra Pavani</h2>    
              <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius labore ut
              quibusdam culpa? Earum optio accusantium magni aliquid 
              laboriosam saepe iste dicta aperiam, minus quia culpa tempore fuga nesciunt?
              </p>
            </div>
            
    </header>
  )
}
