"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.;
    
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // 🔄 Load function to fetch meals and update state
  const loadMealIdeas = async () => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // 📦 useEffect to reload meals when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">
        Meal Ideas for: <span className="text-indigo-600">{ingredient}</span>
      </h2>
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border p-2 rounded bg-white">
              <p className="font-semibold">{meal.strMeal}</p>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-32 h-auto mt-2 rounded"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
