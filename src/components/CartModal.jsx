// CartModal.js
import React from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, onClose, cart, removeFromCart }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cart Modal"
      className="bg-white rounded-lg shadow-lg max-w-lg fixed top-4 right-4 p-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-green-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Close
      </button>
    </Modal>
  );
};

export default CartModal;
