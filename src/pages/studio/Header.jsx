import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";


import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer } from '../../components/Footer';

export const Header = () => {
  return (
    <div className='flex flex-col pt-28 '>
      <div className='pl-24'>
        <div className=''>
          <img src="/src/assets/faceImg.jpg" className='w-[135px] h-[135px] rounded-full 3xl:w-[150px] 3xl:h-[150px]'/>
        </div>
      
        <div className='flex flex-row'>
          
          <div className='flex-col mt-8 text-left font-inter w-[48rem]'>
              <h1 className='text-6xl text-slate-200 3xl:text-7xl'>Proporcionado para trazer a sua verdadeira <span>Identidade</span>.</h1>
              <p className='mt-8 text-xl text-zinc-400 3xl:text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore quia necessitatibus 
                iste dolorem in delectus qui numquam repellendus voluptas quos, distinctio, fugiat unde aliquid, pariatur voluptates totam quibusdam vitae.
              </p>
              <div className='mt-8 flex flex-row gap-6 w-[45rem] 3xl:w-[47rem] justify-end'>
                <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaFacebook /></a>
                <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaInstagram/></a>
                <a href="" className='hover:text-slate-200 text-3xl text-zinc-400 transition-colors'><FaYoutube/></a>
              </div>
          </div>

            <div className='flex mt-4 3xl:ml-60 xl:ml-16'>
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className='w-[30rem] 3xl:w-[44rem]'
              >
                <SwiperSlide><img src="/src/assets/img1.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img2.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img3.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img4.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img5.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img6.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/img7.jpg" alt="" className='rounded-lg' /></SwiperSlide>
              </Swiper>
            </div>
        </div>

      </div>

        <div className='flex flex-row-reverse pt-16 3xl:pt-24 pr-24 pb-28'>
            <div className='flex-col mt-8 text-left font-inter w-[48rem]'>
                <h1 className='text-6xl text-slate-200 3xl:text-7xl'>O lugar Designado para a sua <span>Estética</span> desejada.</h1>
                <p className='mt-8 text-xl text-zinc-400 3xl:text-2xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore quia necessitatibus 
                  iste dolorem in delectus qui numquam repellendus voluptas quos, distinctio, fugiat unde aliquid, pariatur voluptates totam quibusdam vitae.
                </p>
                
            </div>

              <div className='flex mt-8 3xl:mr-60 xl:mr-32'>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className='w-[24rem] 3xl:w-[36rem]'
              >
                  <SwiperSlide><img src="/src/assets/bgImg.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                  <SwiperSlide><img src="/src/assets/img8.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                  <SwiperSlide><img src="/src/assets/img9.jpg" alt="" className='rounded-lg' /></SwiperSlide>
                </Swiper>
              </div>
        </div>

        <Footer />
    </div>
  )
}
