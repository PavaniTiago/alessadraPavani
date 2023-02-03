import React from 'react'
import { BottomSection } from './BottomSection'
import { Header } from './Header'
import { LeftSection } from './LeftSection'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Footer } from '../../components/Footer'

export const Sobre = () => {
  return (
    <div className='w-[100%] h-[100%]  bg-neutral-800'>

      <div className='flex flex-row items-center'>
        <div className='flex w-fit'>
          <Header />
        </div>

        <div className='flex w-full justify-center'>
            <LeftSection img="/src/assets/headerImg.jpg"/>
        </div>
      </div>

      <div className='flex flex-row-reverse items-center'>
        <div className='flex w-fit'>
          <BottomSection />
        </div>

        <div className='flex w-full justify-center'>
          <LeftSection img="/src/assets/img9.jpg"/>
        </div>
      </div>
    <Footer />
    </div>
  )
}
