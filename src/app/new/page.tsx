import NewPost from "@/components/NewPost";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { OPTIONS } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "New Post",
  description: "Create a New Post",
};

const NewPage = async () => {
  const session = await getServerSession(OPTIONS);
  if (!session?.user) {
    redirect("/auth/signin");
  }

  return <NewPost user={session.user} />;
};

export default NewPage;
