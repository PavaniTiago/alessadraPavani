import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen bg-[#1B191A] overflow-x-hidden'>
        <Nav />
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App
