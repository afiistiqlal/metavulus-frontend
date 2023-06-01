import React from "react";

type Props = {
  text: string;
};

const H4 = ({ text }: Props) => {
  return (
    <h4 className="text-[24px] leading-[29px] tracking-normal font-QuicksandRegular">
      {text}
    </h4>
  );
};

export default H4;
