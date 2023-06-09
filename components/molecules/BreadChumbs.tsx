import React from "react";
import leftArrow from "@/public/icon/grayleftarrow.png";
import Image from "next/image";
import Link from "next/link";

type Props = {
  urlBefore?: any;
  category?: string;
  title?: string;
  urlCurrent?: any;
};

const BreadChumbs = (props: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Image src={leftArrow} alt="" />
      </div>
      <div className="flex items-center font-QuicksandMedium text-[14px]">
        <div>
          <Link
            className="text-[#55B328]"
            href={props.urlBefore ? props.urlBefore : "/"}
          >
            {props.category ? props.category : null}
          </Link>
        </div>
        <div>
          <h3 className="text-[#78D64B]">/</h3>
        </div>
        <div>
          <Link
            className="text-[#78D64B]"
            href={props.urlCurrent ? props.urlCurrent : "/"}
          >
            {props.title ? props.title : null}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreadChumbs;
