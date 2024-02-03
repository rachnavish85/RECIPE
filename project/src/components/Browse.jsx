import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component'
import Marquee from "react-fast-marquee";

const Browse = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  const navigate = useNavigate();

  const [recipeList, setrecipeList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/recipe/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setrecipeList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterRecipe = (e) => {
    const value = e.target.value;
    setrecipeList(masterList.filter((recipe) => { return (recipe.title.toLowerCase().includes(value.toLowerCase()) || recipe.category.toLowerCase().includes(value.toLowerCase())) }));
  }

  const displayRecipeData = () => {
    if (recipeList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }
    return recipeList.map((recipe) => (
      <div className=' browse-card col-md-3 mb-4'>
        <div className="browse-card">
          <img src={'http://localhost:5000/' + recipe.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
          <div className="card-footer">
            <h4>{recipe.title}</h4>
            <p>{recipe.category}</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={4}
              size={28}
              activeColor='#ffd700'
            />
            <button className='btn btn-dark mb-2 me-1 px-3' onClick={() => { navigate('/ShowRecipe/' + recipe._id) }}>Click to View</button>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <div className='browse-background' style={{ backgroundImage: "url(public/homeimg/b1.jpg)", minHeight: '100vh' }}>
      <header>
        <div className="container py-4">
          <p className="display-2 text-center fw-bold " style={{ color: "black" }}>
            Navabi Tadka Recipe
          </p>
          <input type="text" className="form-control w-75 m-auto" onChange={filterRecipe} />
        </div>
      </header>
      <div>
        <div className="container">
          <div className="row">
            {displayRecipeData()}
          </div>
        </div>
      </div>
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

export default Browse