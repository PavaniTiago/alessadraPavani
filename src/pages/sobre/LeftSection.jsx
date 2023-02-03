import React from 'react'

export const LeftSection = ( props ) => {
  return (
    <div className='h-[27rem] w-[25rem] pt-8'>
        <div className='flex flex-col items-center gap-8 absolute w-[28rem] h-fit z-10'>
            <img src={props.img} className='w-[15rem] h-[15rem] rounded-full 3xl:w-[18rem] 3xl:h-[18rem]' />
            <p className='text-gray-100 text-xl text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsum. Incidunt,
            sapiente dolores ipsum unde itaque deserunt."</p>
        </div>
        <div className='relative bg-gray-300 rounded-full w-[14rem] h-[13rem] blur-3xl 3xl:left-28 3xl:top-8 left-28 top-4'></div>
    </div>
  )
}
