"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((oldItem) => [...oldItem, newItem]);
  };

  return (
    <main className="p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
