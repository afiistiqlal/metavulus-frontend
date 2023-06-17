import React from "react";
import SubHeader from "../atoms/SubHeader";
import Paragraph from "../atoms/Paragraph";
import Image from "next/image";

type Props = {
  title: string;
  paragraph: string;
  image?: any;
};

const AboutUsCardFooter = ({ title, paragraph, image }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center bg-transparent text-white rounded-[30px] w-72 h-full lg:h-[380px] m-2 lg:p-4 gap-2">
      <div className="bg-[#62CE2E] rounded-2xl w-16 h-16 flex items-center justify-center p-6 mt-12">
        <Image src={image} alt="" width={100} height={100} className="lg:w-[20px] w-[20px]"/>
      </div>
      <div className="text-[40px] font-QuicksandBold tracking-normal leading-[48px] text-center">
        {title}
      </div>
      <Paragraph text={paragraph} />
    </div>
  );
};

export default AboutUsCardFooter;
