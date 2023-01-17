import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='flex flex-row w-full h-24 bg-[#1B191A] items-center pb-2 justify-around overflow-hidden'>
            <img className='w-[9rem] mt-2' src="/src/assets/logo.jpg" alt="" />
        <div className='flex flex-row justify-around w-64 '>
            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            >Home
            </Link>
            
            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            >Studio
            </Link>

            <Link
            className='text-gray-500 text-xl hover:text-gray-200 transition-colors'
            >Sobre
            </Link>
        </div>
    </nav>
  )
}
