import React from "react";
import { AiFillUpCircle } from "react-icons/ai";

type Props = {};

const Upvote = (props: Props) => {
  return (
    <div className="text-2xl text-gray-300 flex flex-col justify-center items-center">
      <AiFillUpCircle />
      <p className="text-xs">300</p>
    </div>
  );
};

export default Upvote;
