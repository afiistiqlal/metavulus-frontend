import Image from "next/image";
import React from "react";

import placeHolder from "@/public/images/placeholder-learn.png";
import ButtonPrimary from "../atoms/ButtonPrimary";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  button: string;
  image?: any;
  link?: any;
};

const LearnCard = ({ title, desc, button, image, link }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[50px] h-full shadow-xl rounded-[20px] py-[32px] px-[34px]">
      <div className="lg:w-4/12">
        <Image src={image ? image : placeHolder} alt="" />
      </div>
      <div className="lg:w-8/12 flex flex-col gap-[37px]">
        <div className="flex flex-col gap-[18px] w-full lg:w-[510px]">
          <h3 className="font-QuicksandBold leading-[24px] text-[28px]">
            {title}
          </h3>
          <p className="font-QuicksandMedium text-[18px] leading-[24px]">
            {desc}
          </p>
        </div>
        {link ? (
          <Link href={link}>
            <ButtonPrimary custom style="py-[17px] px-[94px]" text={button} />
          </Link>
        ) : (
          <div>
            <ButtonPrimary custom style="py-[17px] px-[94px]" text={button} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnCard;
