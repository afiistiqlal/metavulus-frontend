import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderGradient from "@/components/molecules/HeaderGradient";
import Subtitle from "@/components/atoms/Subtitle";
import P from "@/components/atoms/P";
import OneLiner from "@/components/atoms/OneLiner";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";

type Props = {};

const Hore = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-mv-white-4 rounded-b-[75px]">
      <div className="grid grid-cols-5">
        <div className=""></div>
        <div className="text-mv-secondary-1">
          <OneLiner text="Meta" />
        </div>
        <div className="space-x-0">
          <OneLiner text="Minds" />
        </div>
        <div className="col-span-2">img</div>
        <div className=""></div>
        <div className="col-span-1"></div>
        <OneLiner text="Think" />
        <div className="text-mv-primary-4">
          <OneLiner text="Vulus" />
        </div>
        <div className="">img</div>
      </div>
      <div className="flex justify-center">
        <P
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nemo autem tempora modi debitis et voluptas sequi, consequatur
          deleniti perferendis ipsam ipsum asperiores neque beatae tenetur fuga.
          Ipsum, natus consequuntur!"
        />
      </div>
      <ButtonPrimary text="Get Started" />
    </div>
  );
};

export default Hore;
