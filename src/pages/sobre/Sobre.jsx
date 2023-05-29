import React from 'react'
import { BottomSection } from './BottomSection'
import { Header } from './Header'
import { LeftSection } from './LeftSection'

import { Footer } from '../../components/Footer'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import img17 from '/src/assets/img17.jpg'
import img9 from '/src/assets/img9.jpg'

export const Sobre = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='w-[100%] h-[100%] bg-neutral-800'>

      <div className='flex lg:flex-row flex-col items-center'>
        <div className='flex w-fit'>
          <Header />
        </div>

        <div className='flex lg:w-full justify-center' data-aos="fade-left">
            <LeftSection img={img17} text="Impactando vidas através do meu método!!" alt='foto de alessandra pavani'/>
        </div>
      </div>

      <div className='flex lg:flex-row-reverse flex-col items-center'>
        <div className='flex w-fit'>
          <BottomSection />
        </div>

        <div className='flex lg:w-full justify-center' data-aos="fade-right">
          <LeftSection img={img9} text="Somos uma equipe proporcionando sua melhor versão" alt='foto do studio alessandra pavani'/>
        </div>
      </div>
    <Footer />
    </div>
  )
}