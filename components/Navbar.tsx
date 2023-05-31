import Image from "next/image";
import Logo from "/public/logo.png";
import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-mv-primary-0 flex justify-between px-[72px]">
        <Image src={Logo} alt="" width={30} height={10} />
        <Link href={"/Login"}>
          <h4 className="text-white">Login</h4>
        </Link>
    </div>
  );
};

export default Navbar;
