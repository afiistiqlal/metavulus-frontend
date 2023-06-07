import React from "react";

type Props = {
  text: string;
};

const SubHeader = ({ text }: Props) => {
  return (
    <div className="text-[48px] font-QuicksandBold tracking-normal leading-[48px]">
      {text}
    </div>
  );
};

export default SubHeader;
