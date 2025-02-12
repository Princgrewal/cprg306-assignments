"use client";
import { useState } from "react";


export default function Quantity() {
  const [quantity, setQuantity] = useState(1);


  const increment = () => {
    if (quantity < 20)
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1)
    setQuantity(quantity - 1);
  };

  return (
    <main className="flex-auto justify-items-center bg-black" >
    <div className="flex-auto border-1 p-2  bg-gray-900 justify-items-center w-60 rounded-lg">
      <p>{quantity}</p>
      <button className="border-2 rounded-2xl bg-black p-2 w-14 m-3 disabled:bg-gray-900 "  onClick={increment} disabled={quantity>=20} >+</button>
      <button className="border-2 rounded-2xl bg-black p-2 w-14 m-3 disabled:bg-gray-900  "  onClick={decrement} disabled={quantity<=1}>-</button>
    </div>
    </main>);}
    