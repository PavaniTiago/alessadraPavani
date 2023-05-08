import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Rotas } from '../src/Rotas'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full min-h-screen flex flex-col-reverse overflow-hidden'>
          <Rotas/>
          <Nav />
      </div>
    </BrowserRouter>
  )
}

export default App
