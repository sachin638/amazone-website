import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const { title, image, price, description, category, rating } = product;

  return (
    <div className="container mx-auto p-4">
      <Link to="/todays-deals" className="text-blue-500 hover:underline">&larr; Back</Link>
      <div className="mt-4 flex flex-col md:flex-row gap-6">
        <img src={image} alt={title} className="w-full md:w-1/3 h-80 object-cover rounded-lg" />
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500 mt-2">Category: {category}</p>
          <p className="text-xl font-semibold mt-2">${price}</p>
          <p className="mt-4">{description}</p>
          <p className="mt-2 text-yellow-500">
            Rating: {rating.rate} / 5 ({rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
