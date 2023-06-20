import RegisterHeader from "@/components/molecules/RegisterHeader";
import RegisterTemplate from "@/components/templates/RegisterTemplate";
import React from "react";
import { AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { BiMaleFemale, BiPencil } from "react-icons/bi";
import email from "@/public/icon/email.png";
import Image from "next/image";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <RegisterTemplate
      head="Contact Us"
      backgroundImg="bg-contactus"
      backgroundText="The community is"
      backgroundTextColor="Refreshing"
    >
      <RegisterHeader title="How can we help you?" paragraph="" />
      <div className="flex flex-col w-full lg:max-w-[1366px] mt-10 lg:mx-auto px-14 gap-5">
        <form action="#" className="flex flex-col gap-4">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2 items-center">
                <AiOutlineIdcard />
                First Name
              </label>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2 items-center">
                <AiOutlineIdcard />
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2 items-center">
                <BiMaleFemale />
                How shold we address you?
              </label>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Mr"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2 items-center">
                <AiOutlinePhone />
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
                type="number"
                name="phone"
                id="phone"
                placeholder="0888 - 8888 - 8888"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image className="w-[10px] h-[10px]" src={email} alt="" />
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
          />
          <div className="flex items-center gap-3">
            <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2">
              <BiPencil />
              Subject
            </label>
          </div>
          <input
            className="w-full px-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject Email"
            required
          />
          <div className="flex items-center gap-3">
            <label className="text-[#A3A3A3] text-[15px] leading-[15px] flex gap-2">
              <BiPencil />
              Message
            </label>
          </div>
          <textarea
            name="message"
            className="w-full px-3 py-2 border border-[#E8E8E8] rounded-md focus:outline-none focus:border-mv-primary-1 focus:border-2 text-[#A3A3A3] h-64"
          />
          <button
            className="w-auto bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </RegisterTemplate>
  );
};

export default ContactUs;
