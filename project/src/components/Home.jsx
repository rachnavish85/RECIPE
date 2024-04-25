import React from 'react'
import Marquee from "react-fast-marquee";
import { Carousel } from 'bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1712993593~exp=1712997193~hmac=65f34ade9b60629f24cc4087596743126c287bc71717e1acb8fe351dcec04c89&w=1380" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/high-angle-table-full-delicious-food-arrangement_23-2149141347.jpg?t=st=1712993612~exp=1712997212~hmac=913bd631dcb486981caa611a240a79b7d6bde06adee428782b147d5966401e60&w=1060" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/premium-psd/bus-stop-billboard-mockup_23-2147912068.jpg?w=1060" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className='whats'>What's in your mind?</h1>

      <div className='container-home'>

        <Link to={"http://localhost:5173/ShowRecipe/661b6b6f9631206e67ec69a5"}>   
          <img className='poha' src='public/homeimg/poha.jpg' /></Link>

        <Link to={"http://localhost:5173/ShowRecipe/661b6be19631206e67ec69a9"}>
          <img className='sandwich' src='public/homeimg/sandwich.jpeg' /></Link>

        <Link to={"http://localhost:5173/ShowRecipe/661b6c3c9631206e67ec69ad"}>
          <img className='chola' src='public/homeimg/cholabhatura.webp' /></Link>

        <Link to={"http://localhost:5173/ShowRecipe/661b6c869631206e67ec69b1"}>
          <img className='kachori' src='public/homeimg/kachori.jpg' /></Link>
      </div>

      <br></br>
      <div className='box-container'></div>
      <div className='box1'> </div>
      <Link to={""}><img className='box-img-1' src=' https://img.freepik.com/premium-photo/mango-smoothie-rustic-background_818261-29355.jpg?w=740
      ' /></Link>
      <div className='box2'> </div>
      <Link to={""}><img className='box-img-2' src=' https://img.freepik.com/free-photo/glass-apple-juice_144627-6713.jpg?t=st=1713098952~exp=1713102552~hmac=544f184872e04825de8a48cebaf31db0c60c3a3c4d53e07a3a95b1702464384e&w=1060
      ' /></Link>

      <div className='box3'> </div>
      <Link to={""}><img className='box-img-3' src=' https://img.freepik.com/premium-photo/pineapple-smoothie-with-fresh-pineapple-wooden-table_171194-309.jpg?w=1060
      ' /></Link>

      <div className='box4'> </div>
      <Link to={""}> <img className='box-img-4' src=' https://img.freepik.com/premium-photo/photo-pomegranate-juice-with-pieces-beet-isolated-smooth-background_175994-232682.jpg?w=740' /></Link>


      <br></br>
      <br></br>
<br></br>
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



    </div>
  )
}
export default Home
 