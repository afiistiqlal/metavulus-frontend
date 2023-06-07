import React from "react";

type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => {
  return <p className="w-1/3 text-lg font-QuicksandRegular text-center m-2 tracking-wide leading-2">{text}</p>;
};

export default Paragraph;
