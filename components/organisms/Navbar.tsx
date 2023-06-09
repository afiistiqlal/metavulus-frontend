import Image from "next/image";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import React, { useEffect } from "react";
import Link from "next/link";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/ButtonPrimary";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const menuBtnRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);

  const login = (e: any) => {
    e.preventDefault;
    router.push("/login");
  };

  // Use the useEffect hook to toggle the classes when the button is clicked
  useEffect(() => {
    const menuBtn: any = menuBtnRef.current;
    const mobileMenu: any = mobileMenuRef.current;

    const handleClick = () => {
      menuBtn.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
    };

    menuBtn.addEventListener("click", handleClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      menuBtn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-16 px-6 lg:px-[72px]">
      <div className="w-1/2">
        <Link href={"/"}>
          <Image
            className="w-[50px]"
            src={Logo}
            alt=""
            width={100}
            height={10}
          />
        </Link>
      </div>
      <div className="hidden lg:flex flex-row gap-12 justify-start w-2/5">
        <Link href={"/learn/forex"} className="">
          <Subtitle menu={true} text="Learn" />
        </Link>
        <Link href={"/Forum"} className="">
          <Subtitle menu={true} text="Forum" />
        </Link>
        <Link href={"#"} className="">
          <Subtitle menu={true} text="Events" />
        </Link>
        <Link href={"/article"} className="">
          <Subtitle menu={true} text="News" />
        </Link>
      </div>
      <div onClick={login} className="mr-5">
        <Button text="Connect" />
      </div>
      <button ref={menuBtnRef} className="hamburger lg:hidden">
        <div className="bar"></div>
      </button>
      <nav className="mobile-container">
        <ul ref={mobileMenuRef} className="mobile-nav">
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
