import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = 'bg-red-500 text-lg'>AAAAAAAA</div>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/blog' element = {<Blog/>} />
      <Route path='/footer' element = {<Footer/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
  
}

export default App
