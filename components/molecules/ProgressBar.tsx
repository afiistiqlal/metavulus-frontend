import Image from "next/image";
import React from "react";
import badge from "@/public/icon/badge.png";
import progress from "@/public/images/progressbar.jpg";
import Link from "next/link";

type Props = {};

const ProgressBar = (props: Props) => {
  return (
    <div className="flex items-center w-[251px] gap-3">
      <div>
        <Image className="w-[40px]" src={badge} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-QuicksandSemibold text-[16px] text-[#B3B3B3] uppercase">
            Your progress
          </h3>
        </div>
        <div>
          <Image src={progress} alt="" />
          <Link
            href={"/login"}
            className="font-QuicksandBold text-[10px] text-[#78D64B] hover:text-[12px] transition-all ease-out"
          >
            Sign in to track your progress
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
