import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading product details...</p>;
  }

  if (!product) {
    return <p className="p-6 text-red-500">Product not found!</p>;
  }

  const { title, description, price, images, category } = product;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline">
        ⬅ Back to Products
      </Link>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <img
          src={images?.[0] || "https://via.placeholder.com/400"}
          alt={title}
          className="w-full h-80 object-contain rounded-xl shadow"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-500 italic mb-2">
            Category: {category?.name || "Uncategorized"}
          </p>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-xl font-semibold text-green-700 mb-4">₹ {price}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
