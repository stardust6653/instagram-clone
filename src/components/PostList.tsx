"use client";

import useSWR from "swr";

import React from "react";
import { SimplePost } from "@/model/post";
import { GridLoader } from "react-spinners";
import PostListCard from "./PostListCard";

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");
  console.log(posts);
  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}

      {posts && (
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
