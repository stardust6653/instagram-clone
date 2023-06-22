import { client } from "./sanity";

const getFollowingPostsOf = async (username: string) => {
  const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id":_id,
    "createdAt":_createdAt
  `;

  return client.fetch(
    `*[_type == "post" && author-> username == "${username}"
      || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
      | order(_createdAt desc){
        ${simplePostProjection}
    }`
  );
};

export default getFollowingPostsOf;
