import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

// 넥스트에서 제공하는 캐싱 기능을 사용하지 않을 경우 SSG로 렌더링이 되어 데이터 업데이트가 되지 않는다.
// 이 때 아래와 같이 작성하면 SSG로 동작
export const dynamic = "force-dynamic";

export const GET = async () => {
  return searchUsers().then((data) => NextResponse.json(data));
};
