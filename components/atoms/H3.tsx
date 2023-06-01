import React from "react";

type Props = {
  text: string;
};

const H3 = ({ text }: Props) => {
  return (
    <div className="text-[32px] leading-[37px] tracking-wide font-QuicksandRegular">
      {text}
    </div>
  );
};

export default H3;
