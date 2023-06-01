import React from "react";
import Subtitle from "../atoms/Subtitle";
import Image from "next/image";

type Props = {
  featureTitle: string;
  subtitle: string;
};

const FeatureCard = ({ featureTitle, subtitle }: Props) => {
  return (
    <div className="hover:cursor-pointer bg-mv-white-4 text-black text-xs rounded-sm normal-case p-2 shadow-md flex flex-col justify-start gap-2">
      <Image src={''} alt="Image" className="border rounded-full w-10 h-10 flex justify-center items-center"/>
      <Subtitle text={featureTitle} />
      <p className="text-xs">{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
