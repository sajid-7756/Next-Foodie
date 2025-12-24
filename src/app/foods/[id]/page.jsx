import getSingleFood from "@/lib/getSingleFood";
import React from "react";

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if(!food) {
    return <h3 className="text-3xl">Food Not Found</h3>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{food.title}</h1>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              Category: {food.category}
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              Origin: {food.area}
            </span>
          </div>

          <p className="text-2xl font-semibold text-emerald-600">
            ৳ {food.price}
          </p>

          <button className="mt-4 w-full md:w-auto px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Video Section */}
      {food.video && (
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Watch How It’s Made 🍳
          </h2>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={food.video.replace("watch?v=", "embed/")}
              title="Food Recipe Video"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetailsPage;
