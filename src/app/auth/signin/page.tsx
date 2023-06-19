import { getServerSession } from "next-auth";
import React from "react";

const SignPage = async () => {
  const session = await getServerSession();
  return;
};

export default SignPage;
