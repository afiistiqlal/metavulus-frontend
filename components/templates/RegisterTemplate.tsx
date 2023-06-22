import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children: ReactNode;
  head: string;
  backgroundImg: string;
  backgroundText: string;
  backgroundTextColor: string;
};

const RegisterTemplate = ({
  children,
  head,
  backgroundImg,
  backgroundText,
  backgroundTextColor,
}: Props) => {
  return (
    <div className="max-w-full mx-auto flex h-screen lg:flex-row gap-5 flex-col">
      <Head>
        <title>Meta Vulus </title>
      </Head>
      <div
        className={`hidden lg:block w-4/12 ${backgroundImg} bg-cover bg-bottom bg-no-repeat px-10 py-14`}
      >
        <h1 className="font-QuicksandBold text-[87px] leading-[80px] text-white">
          {backgroundText}{" "}
          <span className="text-[#55B328]">{backgroundTextColor}</span>
        </h1>
      </div>
      <div className="w-full lg:w-8/12 pt-2 flex flex-col overflow-y-auto pb-10">
        {children}
      </div>
    </div>
  );
};

export default RegisterTemplate;
