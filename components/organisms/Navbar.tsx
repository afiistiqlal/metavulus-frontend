import Image from "next/image";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import React from "react";
import Link from "next/link";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/ButtonPrimary";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#F4F7FF] flex justify-between items-center h-16 px-[72px]">
      <div className="w-1/2">
        <Image src={Logo} alt="" width={30} height={10} />
      </div>
      <div className="flex flex-row gap-12 justify-start w-2/5">
        <Link href={"/"} className="">
          <Subtitle text="Lorem" />
        </Link>
        <Link href={"/"} className="">
          <Subtitle text="Features" />
        </Link>
        <Link href={"/"} className="">
          <Subtitle text="Events" />
        </Link>
        <Link href={"/"} className="">
          <Subtitle text="News" />
        </Link>
      </div>
      <div className="">
        <Button text="Connect" />
      </div>
    </div>
  );
};

export default Navbar;
