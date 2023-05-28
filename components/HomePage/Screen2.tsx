import React, { useState } from "react";
import GradientText from "../GradientText";

type Props = {};

const tabs = [
  { id: 1, tab: "Trader Network", status: false },
  { id: 2, tab: "Trader Journal", status: false },
  { id: 3, tab: "Trader Signal", status: false },
  { id: 4, tab: "Market", status: false },
];

const TradingJournal = (props: Props) => {
  const [tabRender, setTabRender] = useState(tabs);

  const handleTabClick = (id: number) => {
    const updateTab = tabRender.map((tab: any) => {
      return tab.id === id
        ? { ...tab, status: true }
        : { ...tab, status: false };
    });
    setTabRender(updateTab);
  };

  return (
    <div className="rounded-t-[80px] bg-mv-primary-4 min-h-screen w-lg flex flex-col items-center text-white">
      <div className="my-14 w-[600px]">
        <h1 className="header normal-case text-center text-[62px]">
          Trade <GradientText text="smarter" /> anywhere
        </h1>
      </div>
      <div className="tabs text-white flex gap-4">
        {tabRender.map((tab) => {
          return (
            <div
              className={
                tab.status
                  ? "tab tab-active rounded-3xl text-mv-primary-4 px-10 bg-white normal-case"
                  : "tab bg-sky-950 rounded-3xl normal-case px-10 shadow-md"
              }
              key={tab.id}
              onClick={() => {
                handleTabClick(tab.id);
              }}
            >
              {tab.tab}
            </div>
          );
        })}
      </div>
      <div className="w-[1000px] h-[500px] my-10 shadow-gradient rounded-xl bg-white"></div>
    </div>
  );
};

export default TradingJournal;
