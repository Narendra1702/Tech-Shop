import React from 'react';
import { Link,} from 'react-router-dom';
import productsData from '../Assets/productsData';
import headphones from './headphones';
import { useState } from 'react';

function Card  ()  {
  const sendImage = (item) => {
   
  };
  

  return (
    <div className='container bg-dark'>
    <div className='text-white m-5' style={{display:'flex',justifyContent:'space-evenly',cursor:'pointer',marginTop:'3rem',marginBottom:'2rem'}}>
    <p>All</p>
    <p>Headphones</p>
    <p>Earbuds</p>
    <p>Earphones</p>
    <p>Neckbands</p>
    </div>
    
      <div className='row '>
        {productsData.map((item) => (
          <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6  col-md-3 bg-dark' key={item.id}>
            <div className="card mb-5 bg-dark text-white" style={{ width: '310px', height: '460px',border:'1px solid white', }}>
              <Link to={`/product-details/${item.id}`}>
                <img onClick={() => sendImage(item)} src={item.heroImage} className="card-img-top img-fluid align-items-center m-5 mb-2 " alt="..." style={{ width: '200px', height: '200px', cursor: 'pointer' }} />
              </Link>
              <div className="card-body ">
                <h5 className="card-title">{item.title}</h5>
                <h5 className="card-title">{item.info}</h5>
                <div className='d-flex'>
                  <p className="card-text">{item.finalPrice}</p>
                  <s style={{ fontSize: '15px' }}> <p className="card-text mx-4">{item.originalPrice}</p></s>
                </div>
                <button className="btn" style={{backgroundColor:'red',color:'white'}}>AddToCart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Card;