import React from 'react'
import Marquee from "react-fast-marquee";
import icon1 from '../assets/Images/icons/icon1.jpeg';
import icon2 from '../assets/Images/icons/icon2.jpeg';
import icon3 from '../assets/Images/icons/icon3.jpeg';
import icon4 from '../assets/Images/icons/icon4.jpeg';
import icon5 from '../assets/Images/icons/icon5.jpeg';
import icon6 from '../assets/Images/icons/icon6.jpeg';

const About = () => {
  return (
    <div>
      <div className='about-header'>
        <img className='about-header-img' src='https://i.pinimg.com/originals/ec/39/b7/ec39b7e310db6498bc447e796061b097.jpg' />
      </div>
      <div className='about-container'>
        <img className='about-img' src='public/about-img1.jpg' />
        <h3 className='about-h3'>A traditional Indian meal contains carbohydrates, proteins, vitamins, minerals and other essential nutrients for our health.
          Homemade food are more focused on their food's taste.
          Homemade food is hygienic.<br></br><br></br>
          Homemade food is prepared in clean surroundings with utmost care.
          We cannot be sure about the hygiene levels in the restaurant kitchens.
         </h3>
      </div>

{/*review-section*/}

      <h1 className='customer'>Customer Review</h1>
      <div className='review-container'>
      </div>
        <div className='review1-card'>
          <div className='review-card-body'>
            <h5 className='review-h5'><br></br>I am using their service they are good in providing 
            healthy and home made food at time...
            </h5>
            <img className='review-icon1' src='public/icon1.png'/>
            </div>
        </div>
      
        <div className='review2-card'>
          <div className='review-card-body'>
            <h5 className='review-h5'><br></br>Real home made food,good taste.
            I can suggest to everyone looking for Real home taste...
             </h5>
            <img className='review-icon2' src='public/icon2.png'/>

             </div>
        </div>
      
        <div className='review3-card'>
          <div className='review-card-body'>
            <h5 className='review-h5'><br></br>Real home made food,good taste.
            I can suggest to everyone looking for Real home taste...
             </h5>
            <img className='review-icon3' src='public/icon3.png'/>

             </div>
        </div>
      
        <div className='review4-card'>
          <div className='review-card-body'>
          <h5 className='review-h5'><br></br>I am using their service they are good in providing 
          healthy and home made food at time...</h5>
          <img className='review-icon4' src='public/icon4.png'/>

          </div>
        </div>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <section className="marquee p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                  <img src={icon1} alt="" className="img-fluid" />
                  <p className="card-text">Beverages recipes</p>
                </div>
                <div className="card mx-3">
                  <img src={icon2} alt="" className="img-fluid" />
                  <p className="card-text">Healthy food Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon3} alt="" className="img-fluid" />
                  <p className="card-text">Restaurent Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon4} alt="" className="img-fluid" />
                  <p className="card-text">Common Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon5} alt="" className="img-fluid" />
                  <p className="card-text">Chinese Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon6} alt="" className="img-fluid" />
                  <p className="card-text">Breakfast Recipies</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
