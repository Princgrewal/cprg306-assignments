export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div
        onClick={() => onSelect(name)} // 🔔 Trigger the onSelect callback
        className="cursor-pointer flex-auto border-2 border-black p-2 m-2 bg-gray-900 w-1/4 hover:bg-gray-800 transition"
      >
        <p className="font-bold text-xl text-white">{name}</p>
        <p className="text-white">Buy {quantity} in {category}</p>
      </div>
    );
  }