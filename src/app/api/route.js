export const feedback = [
  {
    id: 1,
    message: "Food was very good",
  },
  {
    id: 2,
    message: "Water behavior should more good",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "First API Created!",
  });
}
