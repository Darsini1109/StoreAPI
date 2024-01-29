import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List1 from './List1';
import './App.css';
function FakeStore() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the fake API
    axios.get('https://fakestoreapi.com/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h1>Fake Store</h1>
      <div className='App'>
        {products.map(product => (
          // <li key={product.id}>{product.title}</li>
          <List1 key={product.id}
          title={product.title}
          img={product.image}
          price={product.price}/>
        ))}
      </div>
    <List1/>
    </>
  );
}

export default FakeStore;
