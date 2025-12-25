import Link from "next/link";
import CardBtn from "../buttons/CardBtn";
import Image from "next/image";

const FoodCard = ({ food, onDetails, onAdd }) => {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        {/* <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover"
        /> */}
        <Image
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover"
          width={300}
          height={150}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-1">{food.title}</h2>

        <p className="text-sm">{food.category}</p>

        <p className="text-lg font-bold text-emerald-600">৳ {food.price}</p>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link href={`/foods/${food.id}`} className="btn flex-1">
            Details
          </Link>

          <CardBtn food={food} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
