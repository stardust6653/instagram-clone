import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { OPTIONS } from "../auth/[...nextauth]/route";
import getFollowingPostsOf from "@/service/posts";

export async function GET() {
  const session = await getServerSession(OPTIONS);
  const user = session?.user;
  console.log(user);
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}
