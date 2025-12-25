import { feedback } from "../route";

export async function GET(request) {
  return Response.json(feedback);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 500,
      message: "Internal Server Error",
    });
  }

  const newFeedback = { id: feedback.length + 1, message };
  feedback.push(newFeedback);

  return Response.json({
    acknowledge: true,
    insertedId: newFeedback.id,
  });
}
