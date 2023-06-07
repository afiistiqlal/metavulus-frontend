import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import TradingJournal from "/public/TradingJournal.png";
import Container from "@/components/atoms/Container";
import Paragraph from "@/components/atoms/Paragraph";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import Image from "next/image";

import React from "react";

type Props = {};

const Screen4 = (props: Props) => {
  return (
    <div className="rounded-[50px] lg:rounded-[75px] bg-mv-white-4 py-14 mt-10 lg:mt-32 z-30 overflow-visible p-6">
      <Container>
        <div className="w-full lg:w-1/3 text-center flex flex-col gap-4">
          <HomePageSubHeader
            textColor="Get"
            text="your trading journal
          on the go"
          />
          <Paragraph text="Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tincidunt ex, et rutrum lorem. Quisque at ex quam. Donec rhoncus eget ex porttitor tincidunt." />
        </div>
        <div className="">
          <Image src={TradingJournal} alt="" width={0} height={0} />
        </div>
        <div className="">
          <ButtonPrimary text="Connect to MT4" />
        </div>
      </Container>
    </div>
  );
};

export default Screen4;
