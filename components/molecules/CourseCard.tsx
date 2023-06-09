import Image from "next/image";
import React from "react";
import placeHolder from "@/public/images/placeholder-learn.png";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/router";

type Props = {
  image?: any;
  id?: string;
  title?: string;
  desc?: string;
};

const CourseCard = ({ image, id, title, desc }: Props) => {
  const router = useRouter();
  const login = () => {
    router.push("/login");
  };
  return (
    <div className="bg-white shadow-xl relative flex flex-col py-[28px] px-[34px] rounded-[20px]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex justify-center w-full lg:w-4/12">
          <Image className="w-full" src={image ? image : placeHolder} alt="" />
        </div>
        <div className="flex flex-col gap-5 justify-end">
          <div className="flex flex-col gap-3">
            <h3 className="font-QuicksandSemibold text-[16px] text-[#B3B3B3] leading-6">{`Course ${id} out of 12`}</h3>
            <h3 className="font-QuicksandBold text-[44px] leading-10">
              {title}
            </h3>
            <p className="font-QuicksandMedium text-[20] leading-6 lg:w-7/12">
              {desc}
            </p>
          </div>
          <div onClick={login} className="lg:w-6/12">
            <ButtonPrimary text="Start Course" />
          </div>
        </div>
        <div className="flex lg:absolute top-10 right-10">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
