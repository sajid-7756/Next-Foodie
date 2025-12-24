import FoodCard from "@/components/cards/FoodCard";
import getAllFoods from "@/lib/getAllFoods";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
import style from "./foods.module.css";

export const metadata = {
  title: "All Foods",
  description: "Best Fast Food in BD",
};


const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const allFoods = await getAllFoods(search);

  return (
    <div>
      <h2 className={`text-3xl font-bold text-yellow-500 ${style.bgred}`}>
        Total Foods: ({allFoods.length})
      </h2>
      <div className="my-3 w-xl">
        <InputSearch />
      </div>
      <div className="flex gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-100 rounded border p-3">
          <h3 className="text-2xl font-semibold">Cart Items</h3>
          <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
