import React from "react";

type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => {
  return <p className="md:text-xs lg:text-sm font-QuicksandRegular my-1 tracking-wide leading-2">{text}</p>;
};

export default Paragraph;
