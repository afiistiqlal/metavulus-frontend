import React from "react";
import Image from "next/image";
import GradientLine from "/public/gradientline.png";
import Iphone from "/public/iPhone.png";
import Link from "next/link";
import Paragraph from "@/components/atoms/Paragraph";
import OneLiner from "@/components/atoms/OneLiner";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-mv-white-4 rounded-b-[75px]">
      <div className="grid grid-cols-5 mt-24">
        <div className="">
          {/* <Image src={GradientLine} alt="" width={1300} height={328}/> */}
        </div>
        <div className="text-mv-secondary-1">
          <OneLiner text="Meta" />
        </div>
        <div className="space-x-0">
          <OneLiner text="Minds" />
        </div>
        <div className="col-span-2 flex items-center ml-2">
          <div className="rounded-full border-mv-secondary-1 border w-12 h-12 flex items-center justify-center">
            <div className="rounded-full bg-mv-secondary-1 w-10 h-10"></div>
          </div>
        </div>
        <div className=""></div>
        <div className="col-span-1"></div>
        <OneLiner text="Think" />
        <div className="text-mv-primary-4">
          <OneLiner text="Vulus" />
        </div>
        <div className="flex items-center">
          <div className="rounded-full border-mv-primary-4 border w-12 h-12 flex items-center justify-center">
            <div className="rounded-full bg-mv-primary-4 w-10 h-10"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/3 text-center">
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nemo autem tempora modi debitis et voluptas sequi, consequatur
          deleniti perferendis ipsam ipsum asperiores neque beatae tenetur fuga.
          Ipsum, natus consequuntur!"
        />
      </div>
      <div className="m-4">
        <ButtonPrimary text="Get Started" />
      </div>
      <div className="flex flex-col w-full justify-end mt-auto">
        <div className="flex gap-4">
          <div className="flex justify-end w-1/3 relative rounded-bl-[75px] overflow-hidden ">
            <div className="h-96 w-32 rounded-full m-6 rotate-45 absolute left-20 top-20 bg-sky-300"></div>
            <div className="rounded-full bg-mv-secondary-1 w-24 h-24"></div>
          </div>
          <div className="flex justify-center overflow-visible w-1/3 relative">
            <Image
              src={Iphone}
              alt=""
              height={600}
              width={0}
              className="absolute"
            />
            <div className=""></div>
          </div>
          <div className="w-1/3 h-96 overflow-hidden">
            <div className="w-52 h-[530px] rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
