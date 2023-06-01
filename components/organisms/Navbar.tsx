import Image from "next/image";
import Logo from "/public/logo.png";
import React from "react";
import Link from "next/link";
import H4 from "../atoms/H4";
import Button from "../atoms/Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-mv-gray-2 flex justify-between items-center h-[64px] px-[72px]">
      <div className="w-1/2">
        <Image src={Logo} alt="" width={30} height={10} />
      </div>
      <div className="flex flex-row gap-6 justify-start w-2/5">
        <Link href={"/"} className="">
          <H4 text="Lorem" />
        </Link>
        <Link href={"/"} className="">
          <H4 text="Features" />
        </Link>
        <Link href={"/"} className="">
          <H4 text="Events" />
        </Link>
        <Link href={"/"} className="">
          <H4 text="News" />
        </Link>
      </div>
      <div className="">
        <Button text="Connect" />
      </div>
    </div>
  );
};

export default Navbar;
