"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return <div className="p-3">{cart.length} Items Added</div>;
};

export default CartItems;
