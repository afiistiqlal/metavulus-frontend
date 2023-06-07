import React from "react";
import Image from "next/image";
import Icon from "/public/Metavulus Logo_PNG_Icon Color.png";
import Container from "@/components/atoms/Container";

type Props = {};

const HomeFooter = (props: Props) => {
  return (
    <div className="m-8 h-64">
      <Image src={Icon} alt="" width={84} height={84} />
    </div>
  );
};

export default HomeFooter;
