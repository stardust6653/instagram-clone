"use client";

// debouncing 을 위한 훅
// 서버에 요청하고자 하는 value를 받아 setTimeout을 실행시키며, 새로운 value가 들어올 때마다 clearTimeout이 실행되어 디바운싱가능

import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number = 500) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
