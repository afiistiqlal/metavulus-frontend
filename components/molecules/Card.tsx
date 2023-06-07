import React from "react";
import SubHeader from "../atoms/SubHeader";
import Paragraph from "../atoms/Paragraph";

type Props = {
  title: string;
  paragraph: string;
};

const Card = ({ title, paragraph }: Props) => {
  return (
    <div className="flex flex-col justify-center bg-transparent border border-white rounded-[30px] w-80 h-[480px] m-4 p-8 gap-3 hover:shadow-gradient">
      <div className="text-7xl">Icon</div>
      <SubHeader text={title} />
      <Paragraph text={paragraph} />
    </div>
  );
};

export default Card;
