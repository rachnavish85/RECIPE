import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import AddRecipe from './components/AddRecipe'
import Browse from './components/Browse'
import Navbar from './components/Navbar'
import { UserProvider } from './UserContext';
import ShowRecipe from './components/ShowRecipe'
import Manage from './components/Manage'
import UserAuth from './UserAuth'
import About from './components/About'
import Profile from './components/Profile'
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='signup' element={<Signup />} ></Route>
            <Route path='login' element={<Login />} ></Route>
            <Route path='addrecipe' element={<UserAuth><AddRecipe /></UserAuth>} ></Route>
            <Route path='browse' element={<Browse />} ></Route>
            <Route path='showrecipe/:id' element={<ShowRecipe/>} />
            <Route path='manage' element={<UserAuth><Manage/></UserAuth>}/>
            <Route path='about' element={<About />} ></Route>
            <Route path='profile' element={<Profile />} ></Route>

          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
