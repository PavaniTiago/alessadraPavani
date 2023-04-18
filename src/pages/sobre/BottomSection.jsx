import React from 'react'
import { RiScissorsFill } from 'react-icons/ri'
import { MdWork } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const BottomSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, [])
    
  return (
    <div className='flex flex-col font-inter md:p-24 md:pt-4 3xl:p-28' data-aos="fade-left">
        
        <div className='flex flex-col md:w-[40rem] md:h-[30rem] h-fit w-[21rem] justify-center 3xl:w-[50rem] 3xl:h-[35rem]'>
            <h2 className='text-white text-center md:text-left md:text-5xl text-3xl pb-4 3xl:text-6xl font-semibold'>O Studio Alessandra Pavani</h2>
            <p className='text-gray-300  text-center md:text-left text-lg md:text-lg 3xl:text-xl font-roboto'>Salão especialista em cabelos naturais ondulados,cacheados e crespos. 
            Não realizamos relaxamento, ou qualquer procedimento químico para modificar a curvatura natural do fio.
            </p>
            
            <div className='flex flex-row md:w-[37rem] w-[22rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded flex items-center justify-center p-4'>
                    <RiScissorsFill className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Há 14 anos trazendo incriveis Transformações</h2>
                    <p className='md:text-justify text-gray-300 3xl:text-lg pt-2'>Com dedicação o Studio á anos vem buscando transformar a auto estima das mulheres e trazendo satisfação.
                    </p>
                </div>
            </div>
            <div className='flex flex-row md:w-[37rem] w-[22rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded flex items-center justify-center p-4'>
                    <MdWork className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Constante Evolução e melhoras no Studio</h2>
                    <p className='md:text-justify text-gray-300 3xl:text-lg pt-2'>Nossa equipe passada por treinamento constante para trazer as melhores tecnicas e atendimento personalizado para você.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
