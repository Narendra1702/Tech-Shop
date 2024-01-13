import React, { useState } from 'react';
import productsData from '../Assets/productsData';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    // If the search query is empty, show all products
    if (query === '') {
      setFilteredProducts(productsData);
    } else {
      // Filter products based on the search query
      const filtered = productsData.filter((product) =>
        product.title && product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.finalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
