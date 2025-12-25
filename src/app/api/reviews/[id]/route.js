import { feedback } from "../../route";

export async function GET(req, { params }) {
  const { id } = await params;

  const singleFeedback = feedback.find((element) => element.id === Number(id));

  return Response.json(singleFeedback);
}
