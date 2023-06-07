import React from "react";
import SubHeader from "../atoms/SubHeader";
import Paragraph from "../atoms/Paragraph";
import Image from "next/image";

type Props = {
  title: string;
  paragraph: string;
  image?: any;
};

const Card = ({ title, paragraph, image }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center bg-transparent border border-white rounded-[30px] w-80 h-full lg:h-[480px] m-4 p-8 gap-3 hover:shadow-gradient transition-all ease-out">
      <Image
        className="lg:w-[70px] w-[50px]"
        src={image}
        alt=""
        width={100}
        height={0}
      />
      <SubHeader text={title} />
      <Paragraph text={paragraph} />
    </div>
  );
};

export default Card;
