import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import Notfound from './Notfound'
import NavBar from './NavBar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
        <Route path='/user/:username' element={<User/>}></Route>
        <Route path='/product/:id' element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
