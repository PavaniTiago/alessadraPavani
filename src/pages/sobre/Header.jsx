import React from 'react'
import { RiScissorsFill } from 'react-icons/ri'
import { MdWork } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

  return (
    <div className='flex flex-col font-inter md:p-32 lg:p-24 mt-20 3xl:mt-28 3xl:p-28' data-aos="fade-right">
        
        <div className='flex flex-col md:w-[42rem] md:h-[30rem] h-fit w-[21rem] justify-center 3xl:w-[51rem] 3xl:h-[35rem]'>
            <h2 className='text-white text-center md:text-left md:text-5xl text-3xl pb-4 3xl:text-6xl font-semibold'>Quem é Alessandra Pavani?</h2>
            <p className='text-gray-300  text-center md:text-left text-lg md:text-lg 3xl:text-xl font-roboto'>
            Cabeleireira com 14 anos de experiência, comecei do Zero, 
            e hoje sou umas das maiores especialistas em cabelos ondulados, cacheados e crespos do mercado nacional, 
            certificada e premiada por instituições de muito prestígio como a Tesoura de Ouro e o Prêmio Brasil Expert Profissional de Crespos e Cacheados.
            </p>
            
            <div className='flex flex-row md:w-[37rem] w-[22rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded flex items-center justify-center p-4'>
                    <RiScissorsFill className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Especializada em Cabelos Crespos e Cacheados</h2>
                    <p className='md:text-justify text-gray-300 3xl:text-lg pt-2'>A minha missão é transformar, 
                        respeitar e ajudar as pessoas a aceitarem o seu cabelo natural. 
Trazendo                a sua melhor versão!! 
                    </p>
                </div>
            </div>

            <div className='flex flex-row md:w-[37rem] w-[22rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded flex items-center justify-center p-4'>
                    <MdWork className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Empresária do Studio Alessandra Pavani</h2>
                    <p className='md:text-justify text-gray-300 3xl:text-lg pt-2'>
                        Fundadora do Studio Alessandra Pavani um dos mais  importantes de Salto.SP em curvaturas naturais. 
                    </p>
                </div>
            </div>

            <div className='flex flex-row md:w-[37rem] w-[22rem] items-center pt-10 3xl:w-[40rem]'>
                <div className='bg-slate-200 rounded flex items-center justify-center p-4'>
                    <TbCertificate className='text-2xl'/>
                </div>
                <div className='flex flex-col ml-4'>
                    <h2 className='text-gray-100 text-xl 3xl:text-2xl'>Educadora da <a href='https://www.instagram.com/redironacademy/' target="_blank" className='hover:underline hover:text-white transition-colors'  >@redironacademy</a> @JACOSMÉTICO</h2>
                    <p className='md:text-justify text-gray-300 3xl:text-lg pt-2'>
                        Alessandra Pavani desenvolveu uma Metodologia para transmitir o seu conhecimento que adquiriu ao longo da sua trajetória com experiências em cabelos naturais.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}
