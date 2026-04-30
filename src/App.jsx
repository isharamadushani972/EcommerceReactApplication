
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Checkout from './Pages/Checkout'
import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
