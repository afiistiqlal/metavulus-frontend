import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo-big.png";
import email from "@/public/icon/email.png";
import password from "@/public/icon/password.png";
import Link from "next/link";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";

type Props = {};

const Index = (props: Props) => {
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
      <div className="w-full lg:w-8/12  pt-2 flex flex-col overflow-y-auto pb-10">
        <div>
          <Link href={"/"}>Back to home</Link>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <Image className="w-1/12" src={logo} alt="" />
          <h1 className="font-QuicksandBold text-[25px] leading-[25px]">
            Hey there {role}!
          </h1>
          <h3 className="font-QuicksandRegular text-[20px] leading-[20px]">
            Help us get to know you
          </h3>
        </div>

        <div className="flex flex-col w-full lg:max-w-[1366px] mt-10 lg:mx-auto px-8 gap-5">
          <div className="flex flex-col gap-3 max-w-[800px] mx-auto">
            <div className="flex">
              <h3 className="font-QuicksandMedium text-[20px] leading-[20px] text-[#CFCFCF]">
                What are you registering as?
              </h3>
            </div>
            <div className="flex gap-2  w-full ">
              <button
                className={
                  active === true
                    ? "w-6/12 py-3 lg:py-[17px] lg:px-[102px] rounded-[10px] bg-[#55B328] text-white font-QuicksandMedium text-[18px] leading-[18px] shadow-lg"
                    : "w-6/12 py-3 lg:py-[17px] lg:px-[102px] rounded-[10px] bg-[#FBFBFB] text-[#BFBFBF] font-QuicksandMedium text-[18px] leading-[18px] shadow-lg"
                }
                onClick={() => {
                  setRole("Trader");
                  setActive(true);
                }}
              >
                Trader
              </button>
              <button
                className={
                  active === false
                    ? "w-6/12 py-3 lg:py-[17px] lg:px-[102px] rounded-[10px] bg-[#55B328] text-white font-QuicksandMedium text-[18px] leading-[18px] shadow-lg"
                    : "w-6/12 py-3 lg:py-[17px] lg:px-[102px] rounded-[10px] bg-[#FBFBFB] text-[#BFBFBF] font-QuicksandMedium text-[18px] leading-[18px] shadow-lg"
                }
                onClick={() => {
                  setRole("Investor");
                  setActive(false);
                }}
              >
                Investor
              </button>
            </div>
          </div>

          <div className="flex flex-col max-w-[1366px] mx-auto gap-3">
            <h1 className="font-QuicksandMedium text-[20px] leading-[20px] text-[#171B26]">
              Please provide your login credentials
            </h1>
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
                  <h3>Forgot Password</h3>
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
              <div className="flex items-center justify-between mt-6 gap-3">
                <div className="flex items-center gap-3">
                  <Image className="w-[10px] h-[10px]" src={password} alt="" />
                  <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                    Confirm Password
                  </label>
                </div>
              </div>
              <input
                className="w-full px-3 mb-3 py-2 border border-[#E8E8E8] rounded-[10px]"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="re-Confirm Your Pasword"
                required
              />
              <button
                className="w-auto bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
                type="submit"
              >
                Register
              </button>
            </form>
            <Link className="text-center" href={"/login"}>
              Login Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
