import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Rotas } from '../src/Rotas'

function App() {
  return (
    <BrowserRouter>
      <div className='w-[100%] h-[100%] flex flex-col-reverse  overflow-y-hidden overflow-x-hidden scroll-smooth '>
          <Rotas/>
          <div className=''>
            <Nav />
          </div>
          
            
      </div>
    </BrowserRouter>
  )
}

export default App
