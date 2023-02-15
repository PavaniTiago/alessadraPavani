import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const LeftSection = ( props ) => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='h-[27rem] w-[25rem] md:pt-8 xsm:mt-32 md:mt-0'>
        <div className='flex flex-col items-center gap-8 absolute md:w-[28rem] h-fit z-10'>
            <img src={props.img} className='md:w-[15rem] md:h-[15rem] w-[12rem] h-[12rem] rounded-full 3xl:w-[18rem] 3xl:h-[18rem]' />
            <p className='text-gray-100 md:text-xl text-lg text-center px-6'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsum. Incidunt,
            sapiente dolores ipsum unde itaque deserunt."</p>
        </div>
        <div className='relative bg-gray-300 rounded-full md:w-[14rem] w-[8rem] h-[8rem] md:h-[13rem] blur-3xl 3xl:left-28 3xl:top-8 md:left-28 left-[8rem] top-[2rem] md:top-4'></div>
    </div>
  )
}
