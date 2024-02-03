import React,{useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import useUserContext from '../UserContext'

const Navbars = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const showLogInOption = () => {
    if (loggedIn) {
      return (
        <>
          <Link className='px-4 py-1 my-0 ' >
            <button onClick={logout} className='btn btn-danger text-center '>Log Out</button>
          </Link>
        </>
      );
    }
    else {
      return (
        <>
          <li className=' ' >
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className=' ' >
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </>
      );
    }
  }


  return (
    <div>
    <div className="navbar navbar-expand-lg  ">
        <div className="container">
          <img className='logo' src='public/homeimg/logo.jpeg'/>

          <Link className="home" to="/">
           <h5 className='home'>Home</h5> 
          </Link>

          <Link className="home" to="browse">
           <h5>Browse</h5> 
          </Link>

         
          <Link className="home" to="login">
           <h5>Login</h5> 
          </Link>

          <Link className="home" to="contact">
           <h5>Contact</h5> 
          </Link>

          <Link className="home" to="about">
           <h5>About</h5> 
          </Link>

          
        </div>

      </div>

      </div>
  );
};

export default Navbars;