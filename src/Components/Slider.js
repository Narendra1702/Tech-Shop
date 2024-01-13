import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function images() {
    var settings = {
        dots: true,
        controls: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <Slider {...settings} className='m-5 text-white bg-dark'>
          <div>
          <h5 className='text-center'>boAt Airdopes 131</h5>
          <img className='img-fluid w-100'  src={require('../Assets/images/products/boat131-1.png')} alt='boAt 131' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹1,099 <s style={{}}>₹2,990</s></h6>
          </div>
          <div>
          <h5 className='text-center'>Jbl Tune 760nc </h5>
          <img className='img-fluid w-100'   src={require('../Assets/images/products/jbl760nc-1.png')} alt='Jbl 760nc' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹5,999 <s style={{}}>₹7,999</s></h6>
          </div>
          <div>
          <h5 className='text-center'>Jbl Endurance Run Sports</h5>
          <img className='img-fluid w-100'  src={require('../Assets/images/products/jbl-endu-1.png')} alt='Jbl Endu' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹999 <s style={{}}>₹1,599</s></h6>
          </div>
          <div>
          <h5 className='text-center'>boAt Rockerz 518</h5>
          <img className='img-fluid w-100'  src={require('../Assets/images/products/boat518-1.png')} alt='boAt 518' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹1,299 <s style={{}}>₹3,990</s></h6>
          </div>
          <div>
          <h5 className='text-center'>boAt Airdopes 203</h5>
          <img className='img-fluid w-100'  src={require('../Assets/images/products/boat203-1.png')} alt='boat 203' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹1,074 <s style={{}}>₹3  ,999</s></h6>
          </div>
          <div>
          <h5 className='text-center'>Sony Ch 710n</h5>
          <img className='img-fluid w-100'  src={require('../Assets/images/products/sonyCh710n-1.png')} alt='boAt 518' style={{width:'15rem'}}/>
          <h6 className="mt-4 text-center">₹8,520 <s style={{}}>₹14,990</s></h6>
          </div>
        </Slider>
      );
}

export default images;