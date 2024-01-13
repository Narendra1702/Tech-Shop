import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import User from './User';

function Header() {
 return (
    <div className='bg-dark'>
      <nav className="navbar navbar-expand-lg  bg-dark" style={{borderBottom:'2px solid black'}}>
        <div className="container-fluid bg-dark">
          <Link className="navbar-brand mx-5" to="/" style={{color:'white'}}>Tech-Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
              
              <Link to='/search'> <i className="fa fa-search mx-3"  style={{color:'white'}}></i> </Link>
              <Link to='/cart'> <i className="fa fa-shopping-cart mx-3" style={{color:'white'}}></i> </Link>
              <User/>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
 );
}

export default Header;