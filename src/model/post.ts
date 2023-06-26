export type Comment = {
  comment: string;
  username: string;
  image?: string | undefined;
};

//Omit<첫번째, 두번째>는 첫번째 타입에서 두번째 속성을 뺀 나머지 속성이다.
export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
