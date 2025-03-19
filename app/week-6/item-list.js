"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  
  const handleClicked = (set) => {
    setSortBy(set);
  };
  
  return (
    <main>
      <button
        className={`border-2 rounded-2xl p-2 w-24 m-3 ${
          sortBy === "name" ? "bg-black" : ""
        }`}
        onClick={() => handleClicked("name")}
      >
        Name
      </button>
      <button
        className={`border-2 rounded-2xl p-2 w-24 m-3 ${
          sortBy === "category" ? "bg-black" : ""
        }`}
        onClick={() => handleClicked("category")}
      >
        Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </main>
  );
}




    

    
