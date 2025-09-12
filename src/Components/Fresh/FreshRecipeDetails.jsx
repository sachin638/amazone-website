import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function FreshRecipeDetails() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="p-6 text-center">Loading recipe...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back button */}
      <Link
        to="/fresh"
        className="text-blue-600 hover:underline inline-block mb-4"
      >
        ⬅ Back to Recipes
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
        <p className="text-gray-600 mb-1">Cuisine: {recipe.cuisine}</p>
        <p className="text-yellow-600 mb-1">⭐ {recipe.rating}</p>
        <p className="mb-1">Prep Time: {recipe.prepTimeMinutes} mins</p>
        <p className="mb-1">Cook Time: {recipe.cookTimeMinutes} mins</p>
        <p className="mb-4">Servings: {recipe.servings}</p>

        <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal ml-6 mt-2 space-y-2">
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FreshRecipeDetails;
