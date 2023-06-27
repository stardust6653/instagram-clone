import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";

type Props = {
  params: { username: string };
};

const getUser = cache(async (username: string) => getUserForProfile(username));

const UserPage = async ({ params: { username } }: Props) => {
  // 캐시
  const user = await getUser(username);

  if (!user) {
    notFound();
  }
  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
};

export default UserPage;

export const generateMetadata = async ({
  params: { username },
}: Props): Promise<Metadata> => {
  // 캐시
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username})﹒Instagram Photos`,
    description: `${user?.name}'s all Instagram posts.`,
  };
};
