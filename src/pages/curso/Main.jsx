import { Footer } from '../../components/Footer';
import FaqDropdown from './FaqDropdown'
import Reasons from './Reasons'
import { HiUserAdd } from 'react-icons/hi'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import img9 from '/src/assets/img9.jpg'
import img11 from '/src/assets/img11.jpg'
import img13 from '/src/assets/img13.jpg'
import img14 from '/src/assets/img14.jpg'
import img15 from '/src/assets/img15.jpg'
import img18 from '/src/assets/img18.jpg'
import img20 from '/src/assets/img20.jpg'
import meiosPagamento from '/src/assets/meiospagto2-1.png'
import selo from '/src/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png'

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import Aos from 'aos'
import "aos/dist/aos.css"

export const Main = () => {

  return (
    <div className="min-h-screen">
      <div className='flex flex-col justify-center items-center relative'>
        <div className="relative w-full">
          <img className='w-full h-screen object-cover brightness-50 blur-sm' src={img9} alt="foto do studio alessandra pavani" />
          <div className="absolute bottom-0 left-0 right-0 h-[100rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div data-aos="fade-left" data-aos-duration="650" className='absolute mb-[6rem] flex flex-col 3xl:max-w-5xl'>
          <h1 className='text-center text-white md:text-6xl 3xl:text-7xl font-extralight'>
            Método Alessandra Pavani
          </h1>
          <h2 className="3xl:text-4xl md:text-3xl font-bold mt-4 text-white leading-tight xsm:px-4 text-center">
            Aprenda a cuidar de seus cabelos naturais
          </h2>
          <p className="mt-4 mb-8 text-lg text-gray-300 max-w-2xl mx-auto xsm:px-6 text-center">
            Descubra dicas e truques para manter seus cabelos naturais saudáveis e bonitos.
            E Clique no botão para adquirir seu curso já!!!
          </p>
          <iframe className='mx-auto mb-8 rounded-lg md:h-[15rem] md:w-[30rem] 3xl:h-[20rem] 3xl:w-[32rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
          <div className="hover:bg-neutral-900 hover:text-slate-50 mx-auto w-[42rem] flex justify-center px-2 py-3 bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-lg">
            <button className='transition-all ease-in-out duration-300'><a href="#">Inscreva-se Agora</a></button>
          </div>
        </div>
      </div>
      <div className='bg-slate-200 w-full flex flex-col items-center justify-center'>
        <h1 className='text-neutral-900 text-6xl font-bold max-w-3xl leading-[3.5rem] py-20 text-center'>
          Para quem são o Método Alessandra Pavani?
        </h1>
        <div className='flex flex-row justify-evenly w-full pb-20'>
          <Reasons
            title='Pessoas que querem se especializar'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Culpa, excepturi nesciunt quasi asperiores sit dolorem voluptas.'
            icon={<HiUserAdd />}
          />
          <Reasons
            title='Profissonais que querem se tornar referencia'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Culpa, excepturi nesciunt quasi asperiores sit dolorem voluptas.'
            icon={<HiUserAdd />}
          />
          <Reasons
            title='Profissionais que querem aumentar seu faturamento'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Culpa, excepturi nesciunt quasi asperiores sit dolorem voluptas.'
            icon={<HiUserAdd />}
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center relative'>
        <div className='w-full relative'>
          <img className='w-full h-[55rem] object-cover object-top brightness-50 blur-sm' src={img11} alt="foto do studio alessandra pavani" />
        </div>
        <div className='absolute flex flex-col justify-center items-center'>
          <div className='flex flex-col max-w-5xl'>
            <h1 className='text-center text-neutral-900 text-6xl font-bold w-full h-fit py-4 bg-yellow-400'>
              Prática de Corte
            </h1>
            <h2 className="text-3xl mt-6 text-white leading-tight xsm:px-4 text-center">
              Com exemplo fica mais fácil de entender, são 7 cortes diferentes em modelos. Nada de boneca!
            </h2>
            <p className="text-3xl mt-6 text-white leading-tight xsm:px-4 text-center">
              Cacheado, crespo, franja, assimétrico, longo, pixie e até um bigchop depois da transição capilar.
            </p>
            <p className="text-3xl font-bold mt-6 text-yellow-400 leading-tight xsm:px-4 text-center">
              Confira abaixo os cortes que você irá aprender:
            </p>
          </div>
          <div className='flex mt-12'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={5}

              pagination={{ clickable: true }}
              loop={true}
              className='w-[65rem] 3xl:w-[80rem]'
            >
              <SwiperSlide><img src={img18} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
              <SwiperSlide><img src={img14} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
              <SwiperSlide><img src={img13} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
              <SwiperSlide><img src={img20} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
              <SwiperSlide><img src={img15} alt="foto de cabelos cacheados" className='rounded-lg' /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='bg-slate-200 w-full flex flex-col items-center justify-center'>
        <div className='max-w-4xl py-16'>
          <div className='flex flex-col items-center justify-center gap-3 pb-12'>
            <del className='text-5xl font-bold text-red-700'>De R&#36;1997,00</del>
            <h2 className='text-6xl font-bold'>POR APENAS 12 X DE R$ 69,56</h2>
            <p className='text-2xl font-semibold'>*Pelo cartão de crédito</p>
            <h2 className='text-6xl font-bold'>ou R$697,00</h2>
            <p className='text-2xl font-regular'>À vista com desconto no cartão de crédito ou PIX</p>
            <img src={meiosPagamento} alt="meios de pagamento do método alessandra pavani" className='mt-6 brightness-50 ' />
            <div className="bg-neutral-900 hover:text-neutral-900 text-slate-100 mx-auto w-[42rem] flex justify-center mt-8 px-2 py-3 
          hover:bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-xl">
              <button className='transition-all ease-in-out duration-300'><a href="#">Inscreva-se Agora</a></button>
            </div>
          </div>
          <div className='flex flex-row items-center mx-auto w-[60rem] space-x-12'>
            <img className='w-64 h-64' src={selo} alt="" />
            <div className='flex flex-col space-y-3'>
              <h2 className='font-bold text-5xl text-yellow-500'>E a Garantia, eu tenho ela???</h2>
              <p className='font-semibold text-2xl'>A garantia tradicional e simples é:</p>
              <p className='text-xl'>
                Se em 7 dias, você não sentiu que irá se tornar especialista em cachos,
                crespos e ondulados e se tornar referência na sua cidade,
                pode mandar um e-mail pra minha equipe,
                que iremos devolver 100% o valor do seu investimento.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-full py-14 bg-neutral-900'>
          <div className='flex flex-col space-y-12 w-[80rem]'>
            <h2 className='text-5xl font-bold text-yellow-500 w-[60rem] self-center text-center'>O que os alunos do Método Alessandra Pavani falam do curso</h2>
            <div className='grid grid-cols-4 gap-10'>
              <iframe className='md:w-[18rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
              <iframe className='md:w-[18rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
              <iframe className='md:w-[18rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
              <iframe className='md:w-[18rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto mt-12 mb-8">
          <h1 className='text-neutral-900 text-center text-5xl font-bold mb-12'>Perguntas Frequentes</h1>
          <FaqDropdown
            question="Qual é a duração do curso de cabeleireiro?"
            answer="O curso de cabeleireiro tem duração de 6 meses, com aulas duas vezes por semana."
          />
          <FaqDropdown
            question="Quais são os requisitos para se inscrever no curso?"
            answer="Para se inscrever no curso de cabeleireiro, é necessário ter no mínimo 18 anos e possuir ensino médio completo."
          />
          <FaqDropdown
            question="Quais são os assuntos abordados no curso?"
            answer="O curso aborda assuntos como corte, tintura, alisamento, penteados e tratamentos capilares."
          />
          <FaqDropdown
            question="Qual é o valor do curso?"
            answer="O valor do curso de cabeleireiro é de R$ 2.500,00, podendo ser parcelado em até 12 vezes."
          />
          <FaqDropdown
            question="Existe algum tipo de certificação após a conclusão do curso?"
            answer="Sim, após a conclusão do curso de cabeleireiro, o aluno recebe um certificado de conclusão válido em todo o território nacional."
          />
        </div>
        <div className="bg-neutral-900 hover:text-neutral-900 text-slate-100 mx-auto w-[42rem] flex justify-center mb-12 px-2 py-3 
        hover:bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-xl">
          <button className='transition-all ease-in-out duration-300'><a href="#">Inscreva-se Agora</a></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

