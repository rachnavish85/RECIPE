import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ShowRecipe = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/recipe/getbyid/" + id);
        console.log(res.status);
    
        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

  return (

<div className="show-background" style={{backgroundImage : "url(https://t3.ftcdn.net/jpg/05/74/98/30/360_F_574983020_1ebtYrNUHq9IwPDCuwOc6SODOgMg5rJY.jpg)"}}>
        <div className="show-container1" >
      <div className="show-card row d-flex justify-content-center align-items-center">
      <div className="show-container card my-3">
                  <div className='card-body'>
                    <span className=" text-center fw-bold d-block display-5 mb-3">😋 {userData.title} 😋</span>
                  <img src={'http://localhost:5000/'+userData.image} alt="" className=" card-img " style={{objectFit : "cover",}}/> 
                  </div>

                  <div className="card-footer">
                      <h4 className="display-5 fw-bold text-center">👉 {userData.title} - {userData.category} 👈</h4>
                      <h5><span className="fw-bold fs-4">Ingredients - </span>{userData.ingredients} </h5>
                     <h5><span className="fw-bold fs-4">Process - </span><pre>{userData.method}</pre></h5>
                  </div>
              </div>
    </div>
    </div>
    </div>
    
  )
}

export default ShowRecipe