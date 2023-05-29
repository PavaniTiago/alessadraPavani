import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer } from '../../components/Footer';

import img19 from '/src/assets/img19.jpg'
import img18 from '/src/assets/img18.jpg'
import img14 from '/src/assets/img14.jpg'
import img13 from '/src/assets/img13.jpg'
import img20 from '/src/assets/img20.jpg'
import img15 from '/src/assets/img15.jpg'
import img6 from '/src/assets/img6.jpg'
import img7 from '/src/assets/img7.jpg'
import img16 from '/src/assets/img16.jpg'
import img8 from '/src/assets/img8.jpg'
import img9 from '/src/assets/img9.jpg'
import img11 from '/src/assets/img11.jpg'
import bgImg from '/src/assets/bgImg.jpg'

export const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='flex flex-col md:pt-20 pt-10' >
      <div className='lg:pl-24 md:px-12'>
        <div data-aos="fade-right" className='hidden lg:block'>
          <img src={img19} className='w-[170px] h-[170px] rounded-full 3xl:w-[200px] 3xl:h-[200px] object-cover object-top' alt='foto da alessandra pavani'/>
        </div>
      
        <div className='flex lg:flex-row flex-col' data-aos="fade-right">
          
          <div className='flex-col mt-8  md:text-left font-inter lg:w-[45rem] w-full'>
              <h1 className='md:text-6xl sm:text-center lg:text-left font-semibold text-3xl text-slate-200 sm:px-8 md:px-0 3xl:text-6xl'>Proporcionado para trazer a sua verdadeira <span>identidade</span>.</h1>
              <p className='sm:mt-12 md:mt-14 text-xl md:text-2xl text-center lg:text-left text-zinc-400 3xl:text-2xl px-12 lg:px-0'>
              Somos o primeiro Studio Especialista em cabelos naturais em Salto SP dedicado trazer pra você a sua melhor versão! 
              <br />
              Além dos serviços temos o prazer de dividir informações de auto cuidados, através de uma consultoria personalizada trazendo excelente resultados no seu dia a dia com técnicas repassadas durante o atendimento.
              </p>
              <div className='mt-8 flex flex-row gap-6 w-[45rem] 3xl:w-[47rem] justify-end px-12'>
                <a href="https://www.facebook.com/StudioAlessandraPavani" target="_blank" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaFacebook /></a>
                <a href="https://www.instagram.com/studioalessandrapavani/" target="_blank" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaInstagram/></a>
                <a href="https://www.youtube.com/@alessandrapavani5485" target="_blank" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaYoutube/></a>
              </div>
          </div>

            <div className='flex mt-4 md:mt-16 3xl:ml-60 md:ml-16 sm:px-8'>
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={2}
              
              pagination={{ clickable: true }}
              loop={true}
              className='w-[30rem] 3xl:w-[44rem]'
              >
                <SwiperSlide><img src={img18} alt="foto de cabelos cacheados" className='rounded-lg'/></SwiperSlide>
                <SwiperSlide><img src={img14} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img13} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img20} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img15} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src={img16} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
              </Swiper>
            </div>
        </div>

      </div>

        <div className='flex lg:flex-row-reverse flex-col md:pt-28 sm:pt-16 3xl:pt-32 lg:pr-24 md:pb-28 pb-20' data-aos="fade-left">
            <div className='flex-col mt-8  md:text-left font-inter lg:w-[45rem] w-full'>
                <h1 className='md:text-6xl text-center lg:text-left text-3xl text-slate-200 font-semibold sm:px-8 md:px-0 3xl:text-6xl'>O lugar designado para a sua <span>estética</span> desejada.</h1>
                <p className='sm:mt-12 md:mt-14 text-xl md:text-2xl text-center lg:text-left text-zinc-400 3xl:text-2xl px-12 lg:px-0'>
                Somos o primeiro Studio em Salto SP 
                Aonde você encontra atendimento personalizado com profissionais treinados e capacitados com o M.A.P 
                <br />
                Um ambiente climatizado e amplo.
                </p>
                
            </div>

              <div className='flex mt-10 md:mt-12 3xl:mr-80 lg:mr-32 sm:px-8'>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                loop={true}
                className='w-[24rem] 3xl:w-[36rem]'
              >
                  <SwiperSlide><img src={bgImg} alt="foto do studio alessandra pavani" className='rounded-lg' /></SwiperSlide>
                  <SwiperSlide><img src={img8} alt="foto do studio alessandra pavani" className='rounded-lg' /></SwiperSlide>
                  <SwiperSlide><img src={img9} alt="foto do studio alessandra pavani" className='rounded-lg' /></SwiperSlide>
                  <SwiperSlide><img src={img11} alt="foto do studio alessandra pavani" className='rounded-lg' /></SwiperSlide>
                </Swiper>
              </div>
        </div>

        <Footer />
    </div>
  )
}