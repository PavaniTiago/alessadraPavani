import React from 'react'

export const Header = () => {
  return (
    <header className='flex flex-row w-auto h-[29rem] bg-neutral-900 shadow-custom '>
        <div className='text-slate-50 flex-1 px-32  self-center mb-6'>
            <span className='text-[4rem]'>Quem sou eu?</span> 
            <p className='text-2xl text-slate-50 w-[36rem]'>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat quam deleniti numquam, 
                iste minima, ipsa labore veritatis earum voluptatum eveniet obcaecati ex impedit fugit architecto, repellat voluptas dolore ab.
            </p>
        </div>        
            <img className='w-[26rem] rounded-l-full' src="/src/assets/headerImg.jpg" alt="" />
    </header>
  )
}
