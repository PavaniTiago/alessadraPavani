import React from 'react'

export default function Prices(props) {
    return (
        <div className='flex flex-col items-center justify-center gap-3 px-2 max-w-xl text-neutral-100'>
            <h2 className='text-3xl md:text-5xl font-semibold uppercase text-neutral-900 md:w-full w-[20rem] py-2.5 md:py-4 rounded-2xl text-center bg-gradient-to-r from-orange-300 to-yellow-700/90'>A oportunidade</h2>
            <div className='flex flex-col justify-center items-center gap-1'>
                <h2 className='text-2xl md:text-3xl uppercase font-bold px-8 md:px-12 text-center mt-2'>Hoje você terá a <span className='text-orange-300'>OPORTUNIDADE</span> de adquirir o curso completo de <span className='text-orange-300'>3350,00 </span>POR:</h2>
                <h2 className='text-3xl md:text-5xl font-bold'>R$1197,00</h2>
                <p className='text-3xl md:text-6xl font-bold text-orange-300'><span className='text-neutral-100'>Parcela de</span> 12x</p>
                <p className='text-md font-semibold'>*Pelo cartão de crédito</p>
                <img src={props.img} className='mt-1 brightness-50 w-[22rem] md:w-[45rem]' />
                <div className="bg-gradient-to-r from-orange-300 to-yellow-700/90 hover:from-orange-200 hover:to-yellow-700/80 text-slate-900 mx-auto md:w-[32rem] flex justify-center mt-4 px-6 md:px-2 py-3 
                font-semibold text-2xl rounded-[32px] transition-all cursor-pointer shadow-xl">
                    <button className='transition-all ease-in-out duration-300 uppercase '><a href="#">garantir minha vaga!</a></button>
                </div>
            </div>
        </div>
    )
}
