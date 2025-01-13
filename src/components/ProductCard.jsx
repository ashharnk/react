// ProductCard.jsx
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h2 className="font-bold text-center mb-2">{product.title}</h2>
      <p className="text-green-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 
