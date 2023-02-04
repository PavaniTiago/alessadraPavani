import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Rotas } from '../src/Rotas'

function App() {
  return (
    <BrowserRouter>
      <div className='w-[100%] h-[100%] overflow-x-hidden scroll-smooth'>
        <div>
          <Nav />
        </div>
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
