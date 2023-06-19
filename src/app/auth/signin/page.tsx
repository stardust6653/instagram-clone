import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const SignPage = async () => {
  const session = await getServerSession(authOptions);
  return;
};

export default SignPage;
