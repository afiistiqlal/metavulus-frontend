import React from "react";
import { AiFillDownCircle } from "react-icons/ai";

type Props = {};

const Downvote = (props: Props) => {
  return (
    <div className="text-2xl text-gray-300 flex flex-col justify-center items-center">
      <AiFillDownCircle /> <p className="text-xs">50</p>
    </div>
  );
};

export default Downvote;
