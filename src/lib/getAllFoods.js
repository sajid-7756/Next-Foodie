const getAllFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods;
};

export default getAllFoods;
