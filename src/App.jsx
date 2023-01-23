import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Rotas } from '../src/Rotas'

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen overflow-x-hidden scroll-smooth overflow-hidden'>
        <div>
          <Nav />
        </div>
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
