import React from "react";

type Props = {
  text: string;
};

const H3 = ({ text }: Props) => {
  return (
    <div className="sm:text-sm md:text-xl lg:text-4xl leading-9 tracking-wide font-QuicksandRegular">
      {text}
    </div>
  );
};

export default H3;
