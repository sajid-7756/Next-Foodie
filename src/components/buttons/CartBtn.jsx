"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CardBtn = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CardBtn;
