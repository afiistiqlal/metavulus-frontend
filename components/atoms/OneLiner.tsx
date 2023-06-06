import React from "react";

type Props = {
  text: string;
};

const OneLiner = ({ text }: Props) => {
  return (
    <div className="sm:text-4xl md:text-6xl lg:text-9xl font-QuicksandBold tracking-tight leading-loose">
      {text}
    </div>
  );
};

export default OneLiner;
