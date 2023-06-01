import React from "react";
import OneLiner from "../atoms/OneLiner";
import GradientText from "../atoms/GradientText";

type Props = {
  textBefore: string;
  gradient: string;
  textAfter: string;
};

const OneLinerGradient = ({ textBefore, gradient, textAfter }: Props) => {
  return (
    <div className="capitalize text-mv-primary-0 leading-none text-[120px] font-QuicksandBold tracking-tight">
      <OneLiner text={textBefore} />
      <GradientText text={gradient} />
      <OneLiner text={textAfter} />
    </div>
  );8
};

export default OneLinerGradient;
