import React from "react";

type Props = {
  textColor?: string;
  text: string;
};

const HomePageSubHeader = ({ text, textColor }: Props) => {
  return (
    <div className="text-[48px] font-QuicksandBold tracking-normal leading-[48px]">
      <span className="text-mv-secondary-4">{textColor}</span> {text}
    </div>
  );
};

export default HomePageSubHeader;
