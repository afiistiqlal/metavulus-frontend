import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderGradient from "@/components/molecules/HeaderGradient";
import Subtitle from "@/components/atoms/Subtitle";
import ButtonLarge from "@/components/atoms/ButtonLarge";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex items-center w-full px-[72px] min-h-screen">
      <div className="w-1/2 flex flex-col justify-center h-96">
        <HeaderGradient
          textBefore="The One"
          gradient="connection"
          textAfter="traders need"
        />
        <Subtitle
          text="Some description regarding the product, keep it simple, to the
            point, and catchy that could drive the readers to click on the CTA
            Below"
        />
        <Link href={"/"} className="w-36 my-2">
          <ButtonLarge text="CTA" />
        </Link>
      </div>
      <div className="flex w-1/2 h-96 items-center justify-center">
        <Image
          src={""}
          alt=""
          width={1}
          className="shadow-gradient bg-mv-white-0 w-96 h-[310px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
