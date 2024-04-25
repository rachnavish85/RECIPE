import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg  ">
        <div className="container">
          <img className='logo' src='public/homeimg/logo.jpeg'/>

          <Link className="home" to="/">
           <h5>Home</h5> 
          </Link>

          <Link className="home" to="ourmenu">
           <h5 >Our Menu</h5> 
          </Link>

          <Link className="home" to="addrecipe">
           <h5>AddRecipe</h5> 
          </Link>

          <Link className="home" to="browse">
           <h5>Browse</h5> 
          </Link>

         
          <Link className="home" to="login">
           <h5>Login</h5> 
          </Link>
          <Link className="home" to="Signup">
           <h5>Signup</h5> 
          </Link>

         
          
        </div>

      </div>



    </div>
  )
}

export default Header
