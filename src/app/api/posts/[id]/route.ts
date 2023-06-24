import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { getPost } from "@/service/posts";
import { OPTIONS } from "../../auth/[...nextauth]/route";

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(OPTIONS);
  const user = session?.user;
  console.log(user);
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
