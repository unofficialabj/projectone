import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Login from './Pages/Login'



const App = () => {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App