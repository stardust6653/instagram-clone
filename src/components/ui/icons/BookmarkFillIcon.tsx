import React from "react";
import { RiBookmarkFill } from "react-icons/ri";

type Props = {
  className?: string;
};

const BookmarkFillIcon = ({ className }: Props) => {
  return <RiBookmarkFill className={className || "w-6 h-6"} />;
};

export default BookmarkFillIcon;
