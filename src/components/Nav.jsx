import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'


export const Nav = () => {

  const [open, setOpen] = useState(false)

  let Links =[
    {name:"Home", link: "/"},
    {name:"Studio", link: "studio"},
    {name:"Sobre", link: "sobre"},
  ];

  return (
    <nav className='flex flex-row w-full md:h-32 xsm:h-24 bg-[#1B191A] items-center pb-2 justify-around font-roboto drop-shadow-2xl '>
            <img className='md:w-[8rem] xsm:w-[6rem] mt-2' src="/src/assets/logo.jpg" alt="" />
          <ul className={`md:flex md:items-center md:pb-0  z-[-1] md:static absolute bg-[#1B191A] md:z-auto text-center w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-24':'top-[-490px]'}`}>
            {
          Links.map((link)=>(
            <div key={link.name} className='md:ml-8  text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-500  hover:text-gray-200 transition-colors md:ml-8 text-xl md:my-0 my-7'>{link.name}</Link>
            </div>
          ))
        }
          </ul>
            <a className='xsm:hidden w-32 h-10 mt-2 rounded text-lg text-gray-500 border-solid border-2 border-gray-500 
            hover:text-gray-200 hover:border-gray-200 transition ease-in-out hover:scale-y-105 hover:scale-x-105 duration-200 md:flex items-center justify-center' 
            href='https://linktr.ee/Alessandra_pavani' target="_blank"
            >Contate-nos</a>
            <div onClick={()=>setOpen(!open)} className='text-4xl md:hidden hover:text-slate-200 text-zinc-400 cursor-pointer transition-colors mt-2'>
              {open ? <MdClose /> : <FiMenu />}
            </div>
    </nav>
  )
}
