"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const SignIn = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        ></ColorButton>
      ))}
    </>
  );
};

export default SignIn;
