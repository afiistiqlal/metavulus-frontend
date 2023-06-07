import ButtonWhite from "@/components/atoms/ButtonWhite";
import HeavenCloud from "/public/havencloud.svg";
import HeavenFoot from "/public/havenfoot.png";
import React from "react";
import Image from "next/image";

type Props = {};

const Screen6 = (props: Props) => {
  return (
    <div className="bg-[#55B328] -mt-20 pt-20 lg:pt-10 z-10 flex flex-col items-center rounded-b-[50px] lg:rounded-b-[75px] overflow-hidden">
      <Image className="w-full" src={HeavenCloud} alt="" width={0} height={0} />
      <div className="text-[#007330] w-full lg:w-[767px] text-[70px] lg:text-[87px] leading-none text-center font-QuicksandBold mb-6">
        A haven for the trader’s mind.
      </div>
      <ButtonWhite text="Connect" />
      <Image className="w-full" src={HeavenFoot} alt="" width={0} height={0} />
    </div>
  );
};

export default Screen6;
