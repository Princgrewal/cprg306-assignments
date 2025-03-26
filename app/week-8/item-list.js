"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
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
      <div className="flex gap-2 mb-4">
        <button
          className={`border-2 rounded-2xl p-2 w-24 m-3 ${
            sortBy === "name" ? "bg-black text-white" : ""
          }`}
          onClick={() => handleClicked("name")}
        >
          Name
        </button>
        <button
          className={`border-2 rounded-2xl p-2 w-24 m-3 ${
            sortBy === "category" ? "bg-black text-white" : ""
          }`}
          onClick={() => handleClicked("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </main>
  );
}
