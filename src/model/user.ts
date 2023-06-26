export type AuthUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
};

//Pick<첫번째, 두번째>는 첫번째 타입에서 두번째 타입들을 가지고 오는 것이다.
export type SimpleUser = Pick<AuthUser, "username" | "image">;

export type HomeUser = AuthUser & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type SearchUser = AuthUser & {
  following: number;
  followers: number;
};

export type ProfileUser = SearchUser & {
  posts: number;
};
