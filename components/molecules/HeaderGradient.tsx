import React from "react";
import Header from "../atoms/Header";
import GradientText from "../atoms/GradientText";

type Props = {
  textBefore: string;
  gradient: string;
  textAfter: string;
};

const HeaderGradient = ({ textBefore, gradient, textAfter }: Props) => {
  return (
    <div className="capitalize text-mv-primary-0 leading-none text-[70px] font-QuicksandBold tracking-tight">
      <Header text={textBefore} />
      <GradientText text={gradient} />
      <Header text={textAfter} />
    </div>
  );
};

export default HeaderGradient;
