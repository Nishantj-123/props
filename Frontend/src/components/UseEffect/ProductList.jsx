import React, { useState, useEffect } from 'react';
import axios from "axios"

const ProductList = () => {
  // State to store the product data
  const [products, setProducts] = useState([]);
  // // State to store loading state
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products data from the API
    axios.get('https://dummyjson.com/products')
      // .then(response => {
      //   console.log(response.data.products);
        
      // }) // Parse the JSON response
      .then(response => {
        console.log(response.data.products);
        
        setProducts(response.data.products); // Set the products state with the data
        // setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // setLoading(false); // Set loading to false in case of error
      });
  }, []); // Empty array means this useEffect will run only once (componentDidMount)

  // Render the list of products or a loading message
  return (
    <div>
      <h1>Product List</h1>
     
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <img src={product.thumbnail} alt={product.name} width="100" />
            </li>
          ))}
        </ul>
  
    </div>
  );
};

export default ProductList;
