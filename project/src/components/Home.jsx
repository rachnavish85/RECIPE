import React from 'react'
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <div >

      <img className='home-img' src='public/homeimg/homeimg.jpg' />
      <h1 className='whats'>What's in your mind?</h1>

      <img className='poha' src='public/homeimg/poha.jpg' />
      <h4 className='poha-h4'>Poha</h4>

      <img className='sandwich' src='public/homeimg/sandwich.jpeg' />
      <h4 className='sandwich-h4'>
      Sandwich</h4>

      <img className='chola' src='public/homeimg/cholabhatura.webp' />
      <h4 className='chola-h4'>Chola Bhatura</h4>
      
      <img className='kachori' src='public/homeimg/kachori.jpg' />
      <h4 className='kachori-h4'>Kachori</h4>
      
      <div className='marquee'>
        <section className="marquee1 p-5">
          <div className="marque-container">
            <div className="row">
              <div className="col-12">
                <Marquee className="p-2 slide">
                  <div className="card mx-3">
                    <img src='public/marque/m1.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m2.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m3.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m4.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m5.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div >
                    <img src='public/marque/m6.jpeg' alt="" className="marquee-img" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      </div>
      <h1 className='whats'>Trendy Recipes</h1>
      <div className="home-card1 ">
        <img className='cart-gujrat' src="public/homeimg//burger2.avif" />
        </div>

      <div className="home-card2 ">
        <img className='cart-punjab' src="public/homeimg/thali.jpeg" />
       </div>

      <div className="home-card3 ">
        <img className='cart-tamil' src="public/homeimg/d2.avif" />
      </div>

      <div className="home-card4 ">
        <img className='cart-thali' src="public/homeimg/c3.jpeg" />
      </div>

      <hr></hr>

      <div className='marquee'>
        <section className="marquee1 p-5">
          <div className="marque-container">
            <div className="row">
              <div className="col-12">
                <Marquee className="p-2 slide">
                  <div className="card mx-3">
                    <img src='public/marque/m1.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m2.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m3.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m4.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div className="card mx-3">
                    <img src='public/marque/m5.jpeg' alt="" className="marquee-img" />
                  </div>
                  <div >
                    <img src='public/marque/m6.jpeg' alt="" className="marquee-img" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    
      <h1 className='h1'> Popular Food Recipe in  Navabi Tadka</h1>

      <div className="home-card1 ">
        <img className='cart-gujrat' src="public/homeimg/gujrat.jpeg" />
      </div>

      <div className="home-card2 ">
        <img className='cart-punjab' src="public/homeimg/punjabi.jpeg" />
      </div>

      <div className="home-card3 ">
        <img className='cart-tamil' src="public/homeimg/tamil.jpeg" />
      </div>
      <div className="home-card4 ">
        <img className='cart-thali' src="public/homeimg/thali1.jpeg" />
      </div>
    </div>
  )
}
export default Home