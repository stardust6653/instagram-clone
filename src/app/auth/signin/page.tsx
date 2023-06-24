import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to Instagram!",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignPage;
