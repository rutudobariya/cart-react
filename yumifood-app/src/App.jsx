import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutus from './componet/Aboutus'
import Footer from './componet/Footer'
import Header from './componet/Header'
import Hero from './componet/Hero'
import Home from './componet/Home'
import OurFood from './componet/OurFood'
import SignIn from './componet/SignIn'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState (0);

  const handleAdd = () => {
    setCount(count+1)
      
  }
  return (
    <BrowserRouter>
    <Header count={count}/>
    <Routes>
      <Route path='/' element={<Home handleAdd={handleAdd}/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/ourfood' element={<OurFood handleAdd={handleAdd}/>}/>
      <Route path='/signin' element={<SignIn/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
  )
}
