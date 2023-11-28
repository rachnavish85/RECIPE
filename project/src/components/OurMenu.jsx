import React, { useState } from 'react'
import Data from './Dummydata'
const OurMenu = () => {
  const [product, setProduct] = useState(Data)

  const displayProduct = () => {
    return product.map((obj) => (
      <div className=' col-md-3 col-3 mb-3 '>
        <div className='card'>
          <div className='card shadow'>
            <img className='product-img' src={obj.image} />
          </div>

          <div className='card-body'>
            {obj.sponsored ? <h6 className='fw-bold text-muted'>Sponsored</h6> : ''}
            <h5 className='card-title'>{obj.brand}</h5>
            <h6 className='card-title'>{obj.dish}</h6>
            <h6 className='card-text1'>₹{obj.price}<span className='text-danger'><strike>₹{obj.price * 2}</strike></span></h6>

          </div>
        </div>

      </div>

    ));

  };
  const searchProduct = (e) => {
    const search = e.target.value
    let filteredProduct = Data.filter((product) => {
      return product.brand.toLowerCase().includes(search.toLowerCase())
    });
    setProduct(filteredProduct)
  };
  return (
    <div>
      <header className='beauty-img  text-black'>
        <div className='container py-4'>
          <h1 className='text-center'><strong>OUR MENU</strong></h1>
          <hr />
          <input onChange={searchProduct} type='text' className='form-control m-auto w-75' placeholder='Search Product' />
        </div>
        <div className='category'>
          <img className='gujrat' src='public/menuimg/gujrat/d4.jpeg' />
          <h3 className='gujrat-h3'>Gujrat</h3>
 
          
          <img className='south' src='public/menuimg/south/a1.jpeg' />
          <h3 className='south-h3'>South India </h3>

          
          <img className='bihar' src='public/menuimg/bihar/b3.jpeg' />
          <h3 className='bihar-h3'>Bihar</h3>

          
          <img className='maharashtra' src='public/menuimg/maharashtra/bp4.jpeg' />
          <h3 className='maharashtra-h3'>Maharashtra</h3>

          
          <img className='chines' src='public/menuimg/chines/m3.jpeg' />
          <h3 className='chines-h3'>Chines</h3>
          
        </div>
      </header>
      <div className='container'>
        <div className='row'>
          {displayProduct()}

        </div>
      </div>
    </div>

  )
}

export default OurMenu
