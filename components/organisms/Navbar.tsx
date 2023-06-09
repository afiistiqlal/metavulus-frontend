import Image from "next/image";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import React from "react";
import Link from "next/link";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/ButtonPrimary";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  const login = (e: any) => {
    e.preventDefault;
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center h-16 px-6 lg:px-[72px]">
      <div className="w-1/2">
        <Link href={"/"}>
          <Image src={Logo} alt="" width={30} height={10} />
        </Link>
      </div>
      <div className="hidden lg:flex flex-row gap-12 justify-start w-2/5">
        <Link href={"/learn/forex"} className="">
          <Subtitle menu={true} text="Learn" />
        </Link>
        <Link href={"#"} className="">
          <Subtitle menu={true} text="Forum" />
        </Link>
        <Link href={"#"} className="">
          <Subtitle menu={true} text="Events" />
        </Link>
        <Link href={"/article"} className="">
          <Subtitle menu={true} text="News" />
        </Link>
      </div>
      <div onClick={login} className="">
        <Button text="Connect" />
      </div>
    </div>
  );
};

export default Navbar;
