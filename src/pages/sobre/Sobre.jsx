import React from 'react'
import { BottomSection } from './BottomSection'
import { Header } from './Header'
import { LeftSection } from './LeftSection'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
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

      <div className='flex md:flex-row xsm:flex-col items-center'>
        <div className='flex w-fit'>
          <Header />
        </div>

        <div className='flex md:w-full justify-center' data-aos="fade-left">
            <LeftSection img="/src/assets/headerImg.jpg"/>
        </div>
      </div>

      <div className='flex md:flex-row-reverse xsm:flex-col items-center'>
        <div className='flex w-fit'>
          <BottomSection />
        </div>

        <div className='flex w-full justify-center' data-aos="fade-right">
          <LeftSection img="/src/assets/img9.jpg"/>
        </div>
      </div>
    <Footer />
    </div>
  )
}
