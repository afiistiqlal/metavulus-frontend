import React from "react";
import Image from "next/image";
import GradientLine from "/public/gradientline.png";
import Iphone from "/public/iPhone.svg";
import Link from "next/link";
import Paragraph from "@/components/atoms/Paragraph";
import OneLiner from "@/components/atoms/OneLiner";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import brain from "@/public/images/barin.png";
import money from "@/public/images/money.png";
import bulet from "@/public/images/bulet.png";
import buletfil from "@/public/images/buletfill.png";
import segitiga from "@/public/images/segitiga.png";
import segitigafil from "@/public/images/segitigafill.png";
import arrow from "@/public/images/arrow.png";
import arrowhead from "@/public/images/arrowhead.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col bg-hero bg-bottom bg-cover bg-no-repeat min-h-screen items-center rounded-b-[75px]">
      <div className="grid grid-cols-5 mt-10 lg:pt-24  relative">
        <div className="absolute">
          <Image
            className="w-full hidden lg:flex"
            src={arrow}
            alt=""
            width={1000}
            height={0}
          />
        </div>

        <div className="">
          {/* <Image src={GradientLine} alt="" width={1300} height={328}/> */}
        </div>
        <div className="text-mv-secondary-1  relative">
          <OneLiner text="Meta" />
          <div className="absolute top-[-20px] left-[-20px]">
            <Image
              className="w-4/12"
              src={segitigafil}
              alt=""
              width={1000}
              height={10}
            />
          </div>
          <div className="absolute bottom-[-30px] left-[-30px]">
            <Image
              className="w-4/12"
              src={segitiga}
              alt=""
              width={100}
              height={0}
            />
          </div>
          <div className="absolute top-[-20px] left-[100px]">
            <Image
              className="w-3/12"
              src={buletfil}
              alt=""
              width={100}
              height={0}
            />
          </div>
          <div className="absolute bottom-[-30px] left-[150px]">
            <Image
              className="w-4/12 object-contain"
              src={bulet}
              alt=""
              width={100}
              height={0}
            />
          </div>
        </div>
        <div className="space-x-0">
          <OneLiner text="Minds" />
        </div>
        <div className="col-span-2 flex items-center ml-2">
          <div className="rounded-full border-mv-secondary-1 border w-14 h-14 flex items-center justify-center">
            <div className="rounded-full bg-mv-secondary-1 w-12 h-12 relative ">
              <div className="w-[80px] absolute top-[-15px] left-[-10px]">
                <Image
                  className="w-[73px] h-[73px] object-cover"
                  src={brain}
                  alt=""
                  width={100}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="col-span-1"></div>
        <OneLiner text="Think" />
        <div className="text-mv-primary-4">
          <OneLiner text="Vulus" />
        </div>
        <div className="flex items-center">
          <div className="rounded-full border-mv-primary-4 border w-14 h-14 flex items-center justify-center">
            <div className="rounded-full bg-mv-primary-4 w-12 h-12 relative">
              <div className="w-[70px] lg:w-[100px] absolute top-[-15px] left-[-11px] lg:top-[-15px] lg:left-[-13px]">
                <Image
                  className="w-[73px] h-[73px] object-contain"
                  src={money}
                  alt=""
                  width={100}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-6 w-full lg:w-1/3 text-center">
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
        <div className="flex gap-4 ">
          <div className="flex justify-end w-1/3 relative rounded-bl-[75px] overflow-hidden ">
            <div className="rounded-full hidden lg:flex bg-mv-secondary-1 w-24 h-24"></div>
          </div>
          <div className="flex justify-center overflow-visible w-full mt-16 lg:mt-0 lg:w-1/3 relative z-20">
            <Image
              src={Iphone}
              alt=""
              height={600}
              width={0}
              className="absolute"
            />
            <div className=""></div>
          </div>
          <div className="w-1/3 h-96 overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
