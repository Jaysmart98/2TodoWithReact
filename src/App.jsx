import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import Faq from './components/Pages/Faq/Faq'
import Home from './components/Pages/Home/Home'
import { Route } from 'react-router'
import { BrowserRouter, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/faq' element={<Faq/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App




// {todo.map((item) => (( data, index)
//   <li key={item.id}>
// {item.task}</li>
// ))}


