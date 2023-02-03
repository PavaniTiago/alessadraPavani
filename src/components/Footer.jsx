import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


export const Footer = () => {
  return (
        <div className='flex flex-end bg-[#1B191A] w-full h-28'>
          <div className='flex flex-row gap-6 justify-center w-full items-center'>
            <div className='text-zinc-400'>
              <p>Copyright © 2023 Alessandra Pavani</p>
            </div>
            <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaFacebook /></a>
            <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaInstagram/></a>
            <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaYoutube/></a>
          </div>
        </div>
  )
}
