import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TodaysDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(({ id, title, image, price }) => (
        <div key={id} className="bg-white shadow-lg rounded-lg p-4">
          <Link to={`/product-detail/${id}`}>
            <img src={image} alt={title} className="w-full h-48 object-cover rounded cursor-pointer" />
          </Link>
          <h2 className="mt-2 font-semibold text-lg">{title}</h2>
          <p className="text-gray-500">${price}</p>
          <Link
            to={`/product-detail/${id}`}
            className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodaysDeals;
