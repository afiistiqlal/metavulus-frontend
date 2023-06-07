import Container from "@/components/atoms/Container";
import OneLiner from "@/components/atoms/OneLiner";
import Subtitle from "@/components/atoms/Subtitle";
import Card from "@/components/molecules/Card";
import React from "react";

type Props = {};

const Screen5 = (props: Props) => {
  return (
    <div className="bg-mv-gray-1 -mt-2 overflow-hidden min-h-screen rounded-b-[75px] text-white">
      <Container>
        <div className="flex py-20">
          <OneLiner text="Our Mindset" />{" "}
          <span className="text-mv-secondary-3">
            <OneLiner text="." />
          </span>
        </div>
        <div className="flex">
          <Card
            title="Learn."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
          <Card
            title="Connect."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
          <Card
            title="Grow."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
        </div>
        <div className="w-1/2 text-center my-12 font-QuicksandMedium text-3xl">
          <Subtitle text="These core values of Learn, Connect, and Grow shape our company culture and guide our actions at Metavulus. By embracing these values, we aim to create an environment that promotes continuous learning, collaboration, and personal growth, allowing traders to realize their aspirations and achieve long-term success" />
        </div>
      </Container>
    </div>
  );
};

export default Screen5;
