import React, { useState } from "react";
import Subtitle from "@/components/atoms/Subtitle";
import H3 from "@/components/atoms/H3";
import Trending from "/public/trending.png";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "next/image";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";

type Props = {};

const TradingJournal = (props: Props) => {
  return (
    <div className="w-full min-h-screen my-4">
      <div className="h-96 border border-black">
        <H3 text="Tulisan goyang" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/3 flex flex-col gap-4">
          <HomePageSubHeader
            textColor="Connect"
            text="with like minded people"
          />
          <Paragraph text="Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tincidunt ex, et rutrum lorem. Quisque at ex quam. Donec rhoncus eget ex porttitor tincidunt." />
          <div className="w-full">
            <ButtonPrimary text="Say Hi!" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={Trending} alt="" width={0} height={0} />
        </div>
      </div>
    </div>
  );
};

export default TradingJournal;
