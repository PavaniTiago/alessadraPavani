import React from 'react'
import { RiScissorsFill } from 'react-icons/ri'
import { MdWork } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'

export const BottomSection = () => {
  return (
    <div className='flex flex-col font-inter p-24 3xl:p-28'>
        
        <div className='flex flex-col w-[40rem] h-[30rem] justify-center 3xl:w-[50rem] 3xl:h-[35rem]'>
            <h2 className='text-white text-5xl pb-4 3xl:text-6xl'>O Studio Alessandra Pavani</h2>
            <p className='text-gray-300 text-lg 3xl:text-xl font-roboto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta esse consectetur repudiandae quasi fugit ea iusto a accusantium veniam ab laudantium illo molestiae,
            autem eligendi facere, eius repellendus et est!
            </p>
            
            <div className='flex flex-row w-[37rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded h-14 flex items-center justify-center p-4'>
                    <RiScissorsFill className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Há 15 anos trazendo incriveis Transformações</h2>
                    <p className='text-justify text-gray-300 3xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                    sit nobis dolorem dignissimos repellat ex vero est, accusamus blanditiis aut.
                    </p>
                </div>
            </div>
            <div className='flex flex-row w-[37rem] items-center pt-6 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded h-14 flex items-center justify-center p-4'>
                    <MdWork className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Constante Evolução e melhoras do Studio</h2>
                    <p className='text-justify text-gray-300 3xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                    sit nobis dolorem dignissimos repellat ex vero est, accusamus blanditiis aut.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
