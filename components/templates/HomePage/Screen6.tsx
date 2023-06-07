import ButtonWhite from "@/components/atoms/ButtonWhite";
import HeavenCloud from "/public/heavencloud.png";
import HeavenFoot from "/public/heavenfoot.png";
import React from "react";
import Image from "next/image";

type Props = {};

const Screen6 = (props: Props) => {
  return (
    <div className="bg-[#55B328] flex flex-col items-center rounded-b-[75px] overflow-hidden">
      <Image src={HeavenCloud} alt="" width={0} height={0} />
      <div className="text-[#007330] w-[767px] text-[87px] leading-none text-center font-QuicksandBold mb-6">
        A haven for the trader’s mind.
      </div>
      <ButtonWhite text="Connect" />
      <Image src={HeavenFoot} alt="" width={0} height={0} />
    </div>
  );
};

export default Screen6;
