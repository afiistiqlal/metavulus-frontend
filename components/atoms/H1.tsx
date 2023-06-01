import React from "react";

type Props = {
  text: string;
};

const H1 = ({ text }: Props) => {
  return (
    <h1 className="text-[48px] leading-[52px] tracking-normal font-QuicksandRegular">
      {text}
    </h1>
  );
};

export default H1;
