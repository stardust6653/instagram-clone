"use client";

import useSWR from "swr";

import React from "react";
import { SimplePost } from "@/model/post";

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
};

export default PostList;
