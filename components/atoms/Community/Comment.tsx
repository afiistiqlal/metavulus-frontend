import React from "react";
import { AiFillMessage } from "react-icons/ai";

type Props = {};

const Comment = (props: Props) => {
  return (
    <div className="text-2xl text-gray-300 flex flex-col justify-center items-center">
      <AiFillMessage />
      <p className="text-xs">160</p>
    </div>
  );
};

export default Comment;
