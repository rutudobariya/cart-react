import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  // Get the product by its id
  useEffect(() => {
    fetch(`http://localhost:8400/products/${params.id}`)
      .then((res) => res.json())
      .then((products) => {
        setProduct(products);
      });
  }, [params.id]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const addToCart = () => {
    // Assuming your cart API endpoint is http://localhost:8400/cart
    fetch('http://localhost:8400/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product,
        quantity: 1, // You can adjust the quantity as needed
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('Item added to cart:', response);
        // You can add additional logic here, such as updating the UI to reflect the item being added to the cart
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold rounded-full bg-indigo-300 py-1 px-8" onClick={handleBackButtonClick}>
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" style={{ height: '200px', width: '200px' }} />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
