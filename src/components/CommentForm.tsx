import React from "react";
import SmileIcon from "./ui/icons/SmileIcon";

const CommentForm = () => {
  return (
    <form className="flex items-center border-t border-neutral-300 px-4">
      <SmileIcon />
      <input
        className="w-full ml-2 border-none outline-none p-3"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="font-bold text-sky-500 ml-2">post</button>
    </form>
  );
};

export default CommentForm;
