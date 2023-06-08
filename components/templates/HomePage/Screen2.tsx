import React, { useState } from "react";
import Subtitle from "@/components/atoms/Subtitle";
import H3 from "@/components/atoms/H3";
import Trending from "@/public/images/screen2.png";
import Trending1 from "@/public/trending.png";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "next/image";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import Marquee from "react-fast-marquee";
import kotakijo from "@/public/icon/kotakijo.png";
import segitigakuning from "@/public/icon/segitigakuning.png";
import buletijo from "@/public/icon/buletijo.png";
import Layout from "../Layout";

type Props = {};

const TradingJournal = (props: Props) => {
  return (
    <div className="w-full min-h-screen my-4">
      <div className="h-96  font-QuicksandBold text-[36px] pt-0 lg:pt-36">
        <Marquee className="h-full z-10 tracking-widest">
          <div>bringing value</div>
          <div>
            <Image
              className="w-3/12  ml-7"
              src={kotakijo}
              alt=""
              width={100}
              height={0}
            />
          </div>
          <div>empowering traders</div>
          <div>
            <Image
              className="w-3/12  ml-7"
              src={segitigakuning}
              alt=""
              width={100}
              height={0}
            />
          </div>
          <div>increase profit</div>
          <div>
            <Image
              className="w-3/12  ml-7"
              src={buletijo}
              alt=""
              width={100}
              height={0}
            />
          </div>
          <div>infinite possibility</div>
          <div>
            <Image
              className="w-3/12  ml-7"
              src={kotakijo}
              alt=""
              width={100}
              height={0}
            />
          </div>
        </Marquee>
      </div>
      <Layout>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-6 lg:px-[160px] -mt-24 lg:mt-0">
          <div className="w-full lg:w-6/12 flex flex-col gap-4">
            <HomePageSubHeader
              textColor="Connect"
              text="with like minded people"
            />
            <Paragraph text="Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tincidunt ex, et rutrum lorem. Quisque at ex quam. Donec rhoncus eget ex porttitor tincidunt." />
            <div className="w-full">
              <ButtonPrimary text="Say Hi!" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex justify-center pb-10 lg:pb-0">
            <Image src={Trending} alt="" width={0} height={0} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TradingJournal;
