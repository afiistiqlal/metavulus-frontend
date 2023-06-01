import React, { useState } from "react";
import SubHeader from "@/components/atoms/SubHeader";
import Subtitle from "@/components/atoms/Subtitle";
import FeatureCard from "@/components/molecules/FeatureCard";
import Screen3 from "./Screen3";

type Props = {};

const tabs = [
  {
    id: 1,
    tab: "Trader Network",
    status: false,
    desc: "Some description about    feature. Keep the description short.",
  },
  {
    id: 2,
    tab: "Trader Journal",
    status: false,
    desc: "Some description about the feature. Keep the description short.",
  },
  {
    id: 3,
    tab: "Trader Signal",
    status: false,
    desc: "Some description about the feature. Keep the description short.",
  },
  {
    id: 4,
    tab: "Market",
    status: false,
    desc: "Some description about the feature. Keep the description short.",
  },
  {
    id: 5,
    tab: "Market",
    status: false,
    desc: "Some description about the feature. Keep the description short.",
  },
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
    <div className="rounded-t-[80px] bg-mv-primary-4 w-lg flex flex-col items-center text-white font-RobotoLight px-[72px]">
      <div className="my- w-[520px] normal-case text-center gap-2 flex flex-col tracking-normal">
        <SubHeader text="Trade Smarter anywhere" />
        <Subtitle text="Some description regarding the product, keep it simple, to the point, and catchy that could drive the readers to click on the CTA Below" />
      </div>
      <div className="w-[1000px] h-[500px] my-2 shadow-gradient rounded-xl bg-white"></div>
      <div className="text-white flex gap-4 my-4">
        {tabRender.map((tab) => {
          return (
            <div
              key={tab.id}
              onClick={() => {
                handleTabClick(tab.id);
              }}
            >
              <FeatureCard featureTitle={tab.tab} subtitle={tab.desc} />
            </div>
          );
        })}
      </div>
      <Screen3/>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TradingJournal;
