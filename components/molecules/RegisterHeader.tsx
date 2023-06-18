import React from "react";
import logo from "@/public/images/logo-big.png";
import Image from "next/image";

type Props = {
  name:string,
  paragraph:string
};

const RegisterHeader = ({name, paragraph}: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Image className="w-1/12" src={logo} alt="" />
      <h1 className="font-QuicksandBold text-[25px] leading-[25px]">
        Hey there {name}
      </h1>
      <h3 className="font-QuicksandRegular text-[20px] leading-[20px] w-1/2 text-center">
        {paragraph}
      </h3>
    </div>
  );
};

export default RegisterHeader;
