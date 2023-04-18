import React from 'react'
import { Footer } from '../../components/Footer';
import FaqDropdown from './FaqDropdown'

import Aos from 'aos'
import "aos/dist/aos.css"

export const Main = () => {

  const pros = [
    "Aprenda a cuidar dos seus cabelos naturais de forma saudável",
    "Acesso a materiais exclusivos, como tutoriais em vídeo e e-books",
    "Suporte técnico e comunidade de alunos para compartilhar experiências",
  ];

  const cons = [
    "não sabe lidar com as diferentes texturas do cabelo cacheado, crespo ou ondulado, você está perdendo clientes.",
    "não sabe como higienizar, cortar e finalizar corretamente estes cabelos, você nunca terá clientes fiéis.",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div data-aos="fade-left" data-aos-duration="650" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Aprenda a cuidar de seus cabelos naturais
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Descubra dicas e truques para manter seus cabelos naturais saudáveis e bonitos.
          </p>
        </div>
        <img
          src="/src/assets/img19.jpg"
          alt="Mulher com cabelos cacheados e naturais"
          className="mx-auto mb-8 rounded-md shadow-lg lg:h-[30rem] lg:w-[25rem]"
          data-aos="fade-left" data-aos-duration="650"
        />
        <div data-aos="fade-left" data-aos-duration="650" className="flex justify-center px-2 py-3 bg-slate-50 font-semibold text-2xl rounded hover:bg-neutral-900 hover:text-slate-50 cursor-pointer shadow-lg">
          <button className='transition-all ease-in-out duration-300'><a href="#">Inscreva-se Agora</a></button>
        </div>
        <div data-aos="zoom-in" data-aos-duration="650" className="mt-16 bg-white rounded-lg p-8 gap-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Se você...
            </h2>
            <ul className="text-gray-700 space-y-4">
              {cons.map((con) => (
                <li key={con} className="flex items-start">
                  <span className="text-red-600 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span className="text-lg">{con}</span>
            </li>
          ))}
        </ul>
          <div className='pt-4'>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Prós do curso
            </h2>
            <ul className="text-gray-700 space-y-4">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start">
                  <span className="text-green-600 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-lg">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div> 
      </div>
    </div>
  <h1 className="text-4xl mt-12 font-bold text-white leading-tight xsm:px-4 text-center">
    Aprenda a cuidar de seus cabelos naturais
  </h1>
  <p className="mt-4 mb-8 text-lg text-gray-400 max-w-2xl mx-auto xsm:px-6 text-center">
    Descubra dicas e truques para manter seus cabelos naturais saudáveis e bonitos.
    E Clique no botão para adiquirir seu curso já!!! 
  </p>
  <iframe className='mx-auto mb-12 rounded-lg md:h-[20rem] md:w-[32rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
  <div data-aos="fade-left" data-aos-duration="650" className="hover:bg-neutral-900 hover:text-slate-50 mx-auto w-[42rem] flex justify-center px-2 py-3 bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-lg">
    <button className='transition-all ease-in-out duration-300'><a href="#">Inscreva-se Agora</a></button>
  </div>
  </div>
    <div className='w-full xl:max-w-4xl xl:rounded-lg py-12 bg-slate-100 mb-12'>
      <div className='flex flex-row items-center mx-auto w-[45rem] space-x-12'>
        <img className='w-40 h-40' src="/src/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png" alt="" />
        <div className='flex flex-col space-y-3'>
          <h2 className='font-bold text-4xl text-yellow-500'>E a Garantia, eu tenho ela???</h2>
          <p className='font-semibold text-xl'>A garantia tradicional e simples é:</p>
          <p className='text-lg'>
            Se em 7 dias, você não sentiu que irá se tornar especialista em cachos, 
            crespos e ondulados e se tornar referência na sua cidade, 
            pode mandar um e-mail pra minha equipe, 
            que iremos devolver 100% o valor do seu investimento.
          </p>
        </div>
      </div>
    </div>

    <div className='w-full xl:max-w-4xl xl:rounded-lg bg-slate-100 mb-12'>
      <h2 className='text-4xl font-bold text-yellow-500 text-center mx-12 pt-8 pb-10'>O que os alunos do Método Alessandra Pavani falam do curso</h2>
      <div className='flex flex-row justify-between pb-12'>
        <iframe className='mx-auto rounded md:w-[15rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
        <iframe className='mx-auto rounded md:w-[15rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
        <iframe className='mx-auto rounded md:w-[15rem]' src="https://www.youtube.com/embed/m6l4gg_mFYk" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div className="max-w-xl mx-auto mb-8">
      <h1 className='text-slate-50 text-center text-5xl font-bold mb-12'>Perguntas Frequentes</h1>
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
  <Footer />
</div>
  )
}

