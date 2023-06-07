import Container from "@/components/atoms/Container";
import OneLiner from "@/components/atoms/OneLiner";
import Subtitle from "@/components/atoms/Subtitle";
import Card from "@/components/molecules/Card";
import React from "react";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import lampu from "@/public/icon/lampu.svg";
import connect from "@/public/icon/connect.svg";
import grow from "@/public/icon/grow.svg";

type Props = {};

const Screen5 = (props: Props) => {
  return (
    <div className="bg-mv-gray-1 -mt-20 pt-10 z-20 min-h-screen rounded-b-[50px] lg:rounded-b-[75px] text-white">
      <Container>
        <div className="flex pt-20 lg:py-20">
          <HomePageSubHeader text="Our Mindset" />{" "}
          <span className="text-mv-secondary-3">
            <HomePageSubHeader text="." />
          </span>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Card
            image={lampu}
            title="Learn."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
          <Card
            image={connect}
            title="Connect."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
          <Card
            image={grow}
            title="Grow."
            paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center my-12 px-6 lg:px-0 font-QuicksandMedium text-3xl">
          <Subtitle text="These core values of Learn, Connect, and Grow shape our company culture and guide our actions at Metavulus. By embracing these values, we aim to create an environment that promotes continuous learning, collaboration, and personal growth, allowing traders to realize their aspirations and achieve long-term success" />
        </div>
      </Container>
    </div>
  );
};

export default Screen5;
