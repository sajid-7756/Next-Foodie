import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect("feedbacks");

export async function GET(req) {
  const result = await feedbackCollection.find().toArray();

  return Response.json(result);
}

export async function POST(req) {
  const { message } = await req.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 500,
      message: "Internal Server Error",
    });
  }

  const newFeedback = { message, createAt: new Date().toISOString() };

  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedback");

  return Response.json(result);
}
