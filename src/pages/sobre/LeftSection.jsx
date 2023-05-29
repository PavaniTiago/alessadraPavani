import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const LeftSection = (props) => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='h-[27rem] w-[25rem] md:pt-8 sm:mt-32 md:mt-0'>
        <div className='flex flex-col items-center gap-8 absolute lg:w-[28rem] h-fit z-10'>
            <img src={props.img} alt={props.alt} className='md:w-[15rem] md:h-[15rem] object-cover object-top  w-[12rem] h-[12rem] rounded-full 3xl:w-[18rem] 3xl:h-[18rem]' />
            <q className='text-gray-100 md:text-xl text-lg text-center px-12'>{props.text}</q>
        </div>
        <div className='relative bg-gray-300 rounded-full md:w-[15rem] md:left-[4.5rem] md:top-[2rem] md:h-[10rem] lg:w-[14rem] w-[8rem] h-[8rem] lg:h-[13rem] blur-3xl 3xl:left-28 3xl:top-8 lg:left-28 left-[8rem] top-[2rem] lg:top-4'></div>
    </div>
  )
}