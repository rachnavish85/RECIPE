import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import './App.css'
import OurMenu from './components/OurMenu'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import AddRecipe from './components/AddRecipe'
import Browse from './components/Browse'
import Contact from './components/Contact'
import Thank from './Thank'
import Navbar from './components/Navbar'
import { UserProvider } from './UserContext';
import ShowRecipe from './components/ShowRecipe'
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='ourmenu' element={<OurMenu />} ></Route>
            <Route path='signup' element={<Signup />} ></Route>
            <Route path='login' element={<Login />} ></Route>
            <Route path='addrecipe' element={<AddRecipe />} ></Route>
            <Route path='browse' element={<Browse />} ></Route>
            <Route path='contact' element={<Contact />} ></Route>
            <Route path='showrecipe/:id' element={<ShowRecipe/>} />

          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
