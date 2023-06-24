import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  className?: string;
};

const HeartIcon = ({ className }: Props) => {
  return <AiOutlineHeart className={className || "w-6 h-6"} />;
};

export default HeartIcon;
