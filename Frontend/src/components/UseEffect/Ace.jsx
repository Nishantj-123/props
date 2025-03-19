import React, {useState, useEffect} from "react";
import axios from "axios";

const Ace = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     // Fetch data from JSONPlaceholder API
     const fetchData = async () => {
      await axios
     .get("https://dummyjson.com/products").then((response) => {
      console.log(response);
      
      setProducts(response.data.products);
     }).catch(error => {
        console.error('Error fetching data', error);

     });
    }
    fetchData();
    }, []); 



      return (
          <div>
      <h1>Product List</h1>
     <ul>
        {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <img src={product.images} alt={product.name} width="100" />
            </li>
      ))}
    </ul>
      </div>
      );

   };


    export default Ace;

 
    
       


