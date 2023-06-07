import React from "react";

type Props = {
  text: string;
};

const OneLiner = ({ text }: Props) => {
  return (
    <div className="text-[30px] md:text-6xl lg:text-[87px] font-QuicksandBold tracking-tight leading-loose">
      {text}
    </div>
  );
};

export default OneLiner;
