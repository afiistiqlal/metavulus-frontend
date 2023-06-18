import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityCard from "@/components/molecules/Community/CommunityCard";
import GetLoop from "@/components/molecules/Community/GetLoop";

type Props = {};

const CommunityMain = (props: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="shadow-xl">
        <CommunityHeader />
      </div>
      <main className="flex flex-col gap-8 mt-4 mx-6 h-[720px] overflow-hidden relative">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <div className="absolute w-full h-12 -bottom-24 shadow-blur"></div>
      </main>
      <GetLoop />
    </div>
  );
};

export default CommunityMain;
