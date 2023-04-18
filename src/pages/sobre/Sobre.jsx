import React from 'react'
import { BottomSection } from './BottomSection'
import { Header } from './Header'
import { LeftSection } from './LeftSection'

import { Footer } from '../../components/Footer'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

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
            <LeftSection img="/src/assets/img17.jpg" text="Impactando vidas através do meu método!!" alt='foto de alessandra pavani'/>
        </div>
      </div>

      <div className='flex lg:flex-row-reverse flex-col items-center'>
        <div className='flex w-fit'>
          <BottomSection />
        </div>

        <div className='flex lg:w-full justify-center' data-aos="fade-right">
          <LeftSection img="/src/assets/img9.jpg" text="Seu cabelo é sua coroa ele merece ser tratado como uma realeza!" alt='foto do studio alessandra pavani'/>
        </div>
      </div>
    <Footer />
    </div>
  )
}