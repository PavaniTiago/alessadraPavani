import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='flex flex-row w-full h-24 bg-[#1B191A] items-center pb-2 justify-around overflow-hidden font-roboto'>
            <img className='w-[9rem] mt-2' src="/src/assets/logo.jpg" alt="" />
          <div className='flex gap-12 pt-2'>
            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            to="/"
            >Home
            </Link>
            
            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            to='studio'
            >Studio
            </Link>

            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            to='sobre'
            >Sobre
            </Link>
          </div>
            <a className='w-32 h-10 mt-2 rounded text-lg text-gray-500 border-solid border-2 border-gray-500 
            hover:text-gray-200 hover:border-gray-200 transition ease-in-out hover:scale-y-105 hover:scale-x-105 duration-200 flex items-center justify-center' 
            href='https://www.instagram.com/studioalessandrapavani/' target="_blank"
            >Contate-nos</a>
    </nav>
  )
}
