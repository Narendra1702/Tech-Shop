import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Assets/productsData';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find(item => item.id === parseInt(productId));

  const sendImage = (item) => {
   
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
    <div className='container'>
    <div className='row'>
      {productsData.map((item) => (
        <div className='col-12' key={item.id}>
          <div  style={{ width: '320px', height: '460px' }}>
            <Link to={`/product-details/${item.id}`}>
              <img onClick={() => sendImage(item)} src={item.heroImage} className="card-img-top img-fluid align-items-center m-5 mb-2 " alt="..." style={{ width: '40rem', height: '25rem', cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  );
};

export default ProductDetails;
