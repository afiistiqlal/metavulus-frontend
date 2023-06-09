import Image from "next/image";
import React from "react";
import placeholder from "@/public/images/placeholder-learn.png";
import { useRouter } from "next/router";

type Props = {};

const ArticleCard = (props: Props) => {
  const router = useRouter();
  const click = () => {
    router.push("/article/slug");
  };
  return (
    <div onClick={click} className="flex flex-col cursor-pointer">
      <div className="w-[300px] overflow-hidden relative">
        <Image className="w-full" src={placeholder} alt="" />
        <div className="absolute top-10 left-10">
          <button className="text-white bg-black px-5 rounded-xl py-2 font-QuicksandBold text-[10px] ">
            Tag
          </button>
        </div>
      </div>
      <div className="ml-4">
        <h3 className="font-QuicksandSemibold text-[15px] leading-[18px]">
          Some title for the blog
        </h3>
        <h3 className="font-QuicksandRegular text-[12px]">Date</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
