import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Search from './Components/Search';
import User from './Components/User';
import Card from './Components/Card';
import { useState } from 'react';
import ProductDetails from './Components/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Header cartSize={cart.length} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/search'
            element={<Search />}
          />
          <Route
            path='/cart'
            element={<Cart cart={cart} />}
          />
          <Route path='/user' element={<User />} />
          <Route
            path='/card'
            element={<Card addToCart={addToCart} />}
          />
          <Route
            path='/productdetails'
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
