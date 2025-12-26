import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(req, { params }) {
  const { id } = await params;

  const query = { _id: new ObjectId(id) };

  if (id.length != 24) {
    return Response.json({
      status: 404,
      message: "Feedback not Found",
    });
  }

  const result = await feedbackCollection.findOne(query);

  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  const query = { _id: new ObjectId(id) };

  if (id.length != 24) {
    return Response.json({
      status: 404,
      message: "Feedback not Found",
    });
  }

  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const { message } = await req.json();

  const query = { _id: new ObjectId(id) };

  if (id.length != 24) {
    return Response.json({
      status: 404,
      message: "Feedback not Found",
    });
  }

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 500,
      message: "Internal Server Error",
    });
  }

  const update = {
    $set: { message },
  };

  const result = await feedbackCollection.updateOne(query, update);

  return Response.json(result);
}
