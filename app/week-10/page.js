"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas"; // Import the MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // New state for the selected item

  // Event handler to clean and set the selected item name
  const handleItemSelect = (item) => {
    // Clean up the item name (remove size and emojis)
    const cleanedName = item.name.split(",")[0].trim().replace(/[^\w\s]/g, "");
    setSelectedItemName(cleanedName); // Update the selectedItemName state
  };

  const handleAddItem = (newItem) => {
    setItems((oldItems) => [...oldItems, newItem]);
  };

  return (
    <main className="p-4 flex">
      {/* Left side - NewItem and ItemList */}
      <div className="flex-1">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right side - MealIdeas */}
      <div className="flex-1">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Display MealIdeas if an item is selected */}
      </div>
    </main>
  );
}
