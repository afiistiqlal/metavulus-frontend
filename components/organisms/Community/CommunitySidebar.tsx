import Accordion from "@/components/atoms/Community/Accordion";
import CommunitySearch from "@/components/molecules/Community/CommunitySearch";
import React, { useState } from "react";

type Props = {};

const CommunitySidebar = (props: Props) => {
  const accordionContent = [
    { title: "Beginner's Lore", content: ["Content 1", "Content 2"] },
    {
      title: "Trading Discussions",
      content: [
        "Currencies",
        "News and Economy",
        "Risk Management Practice",
        "Trade Journals",
        "Trading Lifestyle",
        "Binary Options",
      ],
    },
    { title: "Community", content: ["Content 1", "Content 2"] },
    { title: "Broker Discussion", content: ["Content 1", "Content 2"] },
    { title: "Trading & Tech Tools", content: ["Content 1", "Content 2"] },
    {
      title: "Bitcoin & Crypyocurrencies",
      content: ["Content 1", "Content 2"],
    },
    { title: "Global Market", content: ["Content 1", "Content 2"] },
    { title: "The Lobby", content: ["Content 1", "Content 2"] },
  ];

  return (
    <aside className="w-96 drop-shadow-xl h-screen flex flex-col bg-white p-4 text-left text-sm gap-2">
      <div className="my-2">
        <CommunitySearch />
      </div>
      <div className="my-2">
        {accordionContent.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </aside>
  );
};

export default CommunitySidebar;
