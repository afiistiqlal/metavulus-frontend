import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import React, { useState } from "react";
import emailLogo from "@/public/icon/email.png";
import passwordLogo from "@/public/icon/password.png";
import Link from "next/link";
import RegisterTemplate from "@/components/templates/RegisterTemplate";
import RegisterHeader from "@/components/molecules/RegisterHeader";
import RegisterQuestion from "@/pages/register/question/index"; // Import the new component

type Props = {};

const Index = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showIndicator, setShowIndicator] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false); // New state variable

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setShowIndicator(true);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setShowIndicator(true);
    console.log(email);
  };

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) {
      return "Weak";
    } else if (password.length < 8) {
      return "Moderate";
    } else if (password.length < 10) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = checkPasswordStrength(password);

  const getIndicatorColor = (strength: string): string => {
    switch (strength) {
      case "Weak":
        return "bg-red-500";
      case "Moderate":
        return "bg-yellow-500";
      case "Strong":
        return "bg-orange-500";
      case "Very Strong":
        return "bg-mv-primary-1";
      default:
        return "bg-gray-300";
    }
  };

  const indicatorColor = getIndicatorColor(passwordStrength);

  const handleRegister = () => {
    setRegisterClicked(true); // Update state when the "Register" button is clicked
  };

  if (registerClicked) {
    return <RegisterQuestion />;
  }
  return (
    <RegisterTemplate
      head="Register Question"
      backgroundImg="bg-auth"
      backgroundText="Dive in to lift"
      backgroundTextColor="Up"
    >
      <RegisterHeader
        title="Hey there Trader!"
        paragraph="Help us get to know you"
      />
      <div className="flex flex-col w-full lg:max-w-[1366px] mt-10 lg:mx-auto px-8 gap-5">
        <div className="flex flex-col max-w-[1366px] mx-auto gap-3">
          <h1 className="font-QuicksandMedium text-[20px] leading-[20px] text-mv-primary-1 my-2">
            Please provide your login credentials
          </h1>
          <form
            className="flex flex-col lg:w-[550px] gap-3"
            onSubmit={handleRegister}
          >
            <div className="flex items-center gap-3">
              <Image className="w-[10px] h-[10px]" src={emailLogo} alt="" />
              <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                Email Address
              </label>
            </div>
            <input
              className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
              type="email"
              name="email"
              id="email"
              placeholder="JohnDoe@domain.com"
              required
              onChange={handleEmail}
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  className="w-[10px] h-[10px]"
                  src={passwordLogo}
                  alt=""
                />
                <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                  Password
                </label>
              </div>
            </div>
            <input
              className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              onChange={handlePasswordChange}
              required
            />
            {showIndicator && (
              <div className="mb-1 flex w-full justify-between gap-2">
                <div
                  className={`w-32 h-2 rounded-full ${indicatorColor}`}
                ></div>
                <div
                  className={`w-32 h-2 rounded-full ${indicatorColor}`}
                ></div>
                <div
                  className={`w-32 h-2 rounded-full ${indicatorColor}`}
                ></div>
                <div
                  className={`w-32 h-2 rounded-full ${indicatorColor}`}
                ></div>
              </div>
            )}
            <div className="flex items-center justify-between mt-6 gap-3">
              <div className="flex items-center gap-3">
                <Image
                  className="w-[10px] h-[10px]"
                  src={passwordLogo}
                  alt=""
                />
                <label className="text-[#A3A3A3] text-[15px] leading-[15px]">
                  Confirm Password
                </label>
              </div>
            </div>
            <input
              className="w-full px-3 mb-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
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
          <Link
            className="text-center flex gap-1 justify-center hover:underline hover:decoration-mv-primary-1"
            href={"/login"}
          >
            <span className="text-mv-primary-3 flex items-center gap-1">
              <BsArrowLeft /> Login
            </span>{" "}
            Instead
          </Link>
        </div>
      </div>
    </RegisterTemplate>
  );
};

export default Index;
