import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <h4 className='footer-h1'>For better experience,download<br></br>
          the Navabi Tadka app now</h4>
        <img className='google' src='public/homeimg/googleplay.webp' />
        <img className='app' src='public/homeimg/appstore.webp' />
      </div>

      <div className='footer-container1'>
        <h3 className='footer-h3'>Navabi Tadka</h3>
        <Link><h6 className='footer-h6'>@Navabi Tadka</h6></Link>

        <div className='company'>
        <h5 className='company'>Company</h5>
        <Link to={'http://localhost:5173/about'}><h6 className='about'>About</h6></Link>
        <Link to={''}><h6 className='about'>Career</h6></Link>
        <Link to={''}><h6 className='about'>Team</h6></Link>
        <Link to={''}><h6 className='about'>Privacy Policy</h6></Link>
        </div>

        <div className='account'>
        <h4 className='account'>Account</h4>
        <Link to={'http://localhost:5173/profile'}><h6 className='profile'>Profile</h6></Link>
        <Link to={''}><h6 className='help '>Help</h6></Link>

        </div>
        <h4 className='followus'>Follow us</h4>
        <img className='facebook' src='public/homeimg/facebook.png'/>
        <img className='insta' src='public/homeimg/insta.jpeg'/>
        <img className='twitter' src='public/homeimg/twitter.png'/>

      </div>
      
      <hr></hr>
    </div>
  )
}

export default Footer
