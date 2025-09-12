import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fresh() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const { recipes } = await res.json();
        setRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">🍴 Fresh Recipes</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map(({ id, name, image, cuisine, rating }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-gray-600 text-sm">Cuisine: {cuisine}</p>
              <p className="text-yellow-600 text-sm">⭐ {rating}</p>

              <Link
                to={`/fresh/${id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Show More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fresh;
