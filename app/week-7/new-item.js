"use client"
import { useState } from "react";

export default function Form({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1);
      };
    
      const decrement = () => {
        if (quantity > 1)
        setQuantity(quantity - 1);
      };
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please enter a name");
            return;
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const item = { id, name, quantity, category };
        console.log(item);
        onAddItem(item);
        

        setName("");
        setQuantity(1);
        setCategory("Produce");
        
    };


    return (
        <main className="flex-auto ">
            <form onSubmit={handleSubmit} className="flex-auto border-1 p-2 bg-gray-900 justify-items-center w-96 rounded-lg">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 rounded-2xl bg-black p-2 w-64 m-3"
                />
                <label htmlFor="quantity"></label>
                <div className="flex items-center bg-transparent rounded-lg">
                    
                   <p>{quantity}</p>
                   <button className="border-2 rounded-2xl bg-black p-2 w-14 m-3 disabled:bg-gray-900 "  onClick={(e) => { e.preventDefault(); increment(); }} >+</button>
                   <button className="border-2 rounded-2xl bg-black p-2 w-14 m-2 disabled:bg-gray-900  "  onClick={(e) => { e.preventDefault(); decrement(); }} disabled={quantity<=1}>-</button>
     
                </div>

    
                <label htmlFor="category" className="flex-auto justify-items-start">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border-2 rounded-2xl bg-black p-2 w-56 m-3"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
               
                <button className=" flex align-middle border-2 rounded-2xl bg-black p-2 w-80 m-3 disabled:bg-gray-900 justify-center" type="submit">Submit</button>
            </form>
        </main>
    );}
