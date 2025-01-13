// Navbar.jsx
import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button
        onClick={onCartClick}
        className="bg-white text-blue-600 px-4 py-2 rounded shadow"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar; 
