import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r">
        <h5 className="font-bold mb-2">Any Department</h5>
        <ul className="space-y-1 text-gray-700">
          <li>Amazon Launchpad</li>
          <li>Baby Products</li>
          <li>Bags, Wallets and Luggage</li>
          <li>Beauty</li>
          <li>Books</li>
          <li>Clothing & Accessories</li>
          <li>Computers & Accessories</li>
          <li>Electronics</li>
          <li>Garden & Outdoors</li>
          <li>Health & Personal Care</li>
          <li>Home & Kitchen</li>
          <li>Jewellery</li>
          <li>Kindle Store</li>
          <li>Movies & TV Shows</li>
          <li>Music</li>
          <li>Musical Instruments</li>
          <li>Office Products</li>
          <li>Pet Supplies</li>
          <li>Shoes & Handbags</li>
          <li>Sports, Fitness & Outdoors</li>
          <li>Toys & Games</li>
          <li>Video Games</li>
          <li>Watches</li>
        </ul>
      </div>

      {/* Products Grid */}
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-4">Amazon Hot New Releases</h2>
        <p className="mb-6">
          Our bestselling new and future releases. Updated frequently.
        </p>

        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(({ id, title, price, images }) => (
            <div
              key={id}
              className="bg-white shadow-xl rounded-2xl p-4 hover:shadow-lg transition"
            >
              <img
                src={images?.[0] || "https://via.placeholder.com/300"}
                alt={title}
                className="h-40 w-full object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600">₹ {price}</p>
              <Link
                to={`/product/${id}`}
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
