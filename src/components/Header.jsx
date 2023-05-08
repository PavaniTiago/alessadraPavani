import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import bgImg from '../assets/bgImg.jpg'
import frontImg from '../assets/frontImg.jpg'

import { Link } from 'react-router-dom'

export const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <header className='flex w-screen h-screen bg-neutral-900 font-roboto justify-center md:justify-start overflow-hidden' >  
            <img className='w-full brightness-[35%] blur-sm mt-1 hidden md:block overflow-hidden' src={bgImg} alt='foto do studio alessandra pavani'/>
            <img className='w-full brightness-50 blur-sm mt-1 block md:hidden' src={frontImg} alt='foto do studio alessandra pavani'/>
            <div data-aos="fade-left" className='text-white absolute flex flex-col md:gap-6 px-4 md:px-0 w-[16rem] h-[28rem] xsm:w-[24rem] 3xl:h-[34rem] 3xl:w-[60rem] md:w-[35rem] md:ml-28 md:mt-[5rem] 3xl:mt-[10rem] self-center'>
              <h2 className='md:text-start text-3xl xsm:text-4xl font-semibold md:text-6xl mb-8 font-inter 3xl:text-8xl text-center'>Studio Alessandra Pavani</h2>    
              <p className='md:text-2xl text-xl text-center md:text-start'>Salão especializado em cabelos naturais e cores. 
              Não realizamos relaxamento ou qualquer tipo de química que venha modificar a curvatura natural do seu cabelo.
              </p>
              <Link className='text-white mt-4 flex self-end bg-neutral-800 px-5 py-3 items-center justify-center rounded-lg 
              transition ease-in-out hover:-translate-y-1 hover:scale-x-105 duration-200 hover:bg-zinc-900 shadow-xl'
              to='/studio'
              >Saiba mais</Link>
            </div>
    </header>
  )
}
