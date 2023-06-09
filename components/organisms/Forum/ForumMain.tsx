import React from "react";
import ForumHeader from "./ForumHeader";
import ForumCard from "@/components/molecules/Forum/ForumCard";
import GetLoop from "@/components/molecules/Forum/GetLoop";

type Props = {};

const ForumMain = (props: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="shadow-xl">
        <ForumHeader />
      </div>
      <main className="flex flex-col gap-8 mt-4 mx-6 h-[720px] overflow-hidden relative">
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <div className="absolute w-full h-12 -bottom-24 shadow-blur"></div>
      </main>
      <GetLoop />
    </div>
  );
};

export default ForumMain;
