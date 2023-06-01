import React from "react";

type Props = {
  text: string;
};

const H2 = ({ text }: Props) => {
  return (
    <div className="text-[40px] leading-[45px] tracking-normal font-QuicksandRegular">
      {text}
    </div>
  );
};

export default H2;
