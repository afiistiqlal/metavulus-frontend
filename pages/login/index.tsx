import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo-big.png";
import Link from "next/link";
import email from "@/public/icon/email.png";
import password from "@/public/icon/password.png";

type Props = {};

const index = (props: Props) => {
  const [role, setRole] = useState("Trader");
  const [active, setActive] = useState(true);

  return (
    <div className="max-w-full mx-auto flex h-screen lg:flex-row gap-5 flex-col">
      <Head>
        <title>Meta Vulus | Login</title>
      </Head>
      <div className="hidden lg:block w-4/12 bg-auth bg-cover bg-bottom bg-no-repeat px-10 py-14">
        <h1 className="font-QuicksandBold text-[87px] leading-[59px] text-white">
          Dive in to lift <span className="text-[#55B328]">up</span>
        </h1>
      </div>
      <div className="w-full lg:w-8/12  pt-2 flex flex-col">
        <div className="ml-3">
          <Link href={"/"}>Back to home</Link>
        </div>

        <div className="w-full flex flex-col items-center gap-5 mt-20 lg:mt-44">
          <Image className="w-1/12" src={logo} alt="" />
          <h1 className="font-QuicksandBold text-[25px] leading-[25px]">
            Welcome Back!
          </h1>
          <h3 className="font-QuicksandRegular text-[20px] leading-[20px]">
            Millions are waiting for you to connect!
          </h3>
        </div>

        <div className="flex flex-col lg:max-w-[1366px] mt-10 lg:mx-auto px-8 gap-5">
          <div className="flex flex-col w-full gap-3">
            <form className="flex flex-col lg:w-[550px] gap-3" action="">
              <div className="flex items-center gap-3">
                <Image className="w-[10px] h-[10px]" src={email} alt="" />
                <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                  Email Address
                </label>
              </div>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[10px]"
                type="email"
                name="email"
                id="email"
                placeholder="JohnDoe@domain.com"
                required
              />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image className="w-[10px] h-[10px]" src={password} alt="" />
                  <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                    Password
                  </label>
                </div>
                <div>
                  <h3 className="cursor-pointer">Forgot Password</h3>
                </div>
              </div>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[10px]"
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
              <button
                className="w-auto bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
                type="submit"
              >
                Login
              </button>
            </form>
            <Link className="text-center" href={"/register"}>
              Register Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
