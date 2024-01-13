import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import productsData from '../Assets/productsData'

const ImageSlider = () => {
 
  return (
   <div>
   <marquee direction='left'  >
  {productsData.slice(0,5).map((item)=>(
    <img className=''  src={item.heroImage} alt="product" key={item.id} style={{width:'20rem'}} />
  ))}
   
   </marquee>
   
   
   </div>
  );
};

export default ImageSlider;
