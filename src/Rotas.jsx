import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import { Home } from './pages/home/Home'
import { Sobre } from './pages/sobre/Sobre'
import { Studio } from './pages/studio/Studio'


export const Rotas = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/studio' element={<Studio />} />
        <Route path='/sobre' element={<Sobre />} />
    </Routes>
  )
}
