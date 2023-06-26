import React from "react";
import { AiFillHeart } from "react-icons/ai";

type Props = {
  className?: string;
};

const HeartFillIcon = ({ className }: Props) => {
  return <AiFillHeart className={className || "w-6 h-6 fill-red-500"} />;
};

export default HeartFillIcon;
