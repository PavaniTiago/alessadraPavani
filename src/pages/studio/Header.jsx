import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


export const Header = () => {
  return (
    <div className='flex flex-col pt-16 pl-24'>
      <div className=''>
        <img src="/src/assets/img2.jpg" className='w-32 h-32 rounded-full '/>
      </div>

      <div className='mt-8 text-left font-inter w-[54rem]'>
        <h1 className='text-6xl text-slate-200'>Proporcionado para trazer a sua verdadeira <span>Identidade</span>.</h1>
        <p className='mt-8 text-xl text-zinc-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore quia necessitatibus 
          iste dolorem in delectus qui numquam repellendus voluptas quos, distinctio, fugiat unde aliquid, pariatur voluptates totam quibusdam vitae.
        </p>
      </div>

      <div className='flex flex-row gap-6 w-[54rem] justify-end'>
        <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaFacebook /></a>
        <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaInstagram/></a>
        <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaYoutube/></a>
      </div>
    </div>
  )
}
