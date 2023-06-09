import Navbar from "@/components/organisms/Navbar";
import Layout from "@/components/templates/Layout";
import Seo from "@/components/templates/Seo";
import Image from "next/image";
import React from "react";
import forex from "@/public/images/forex-hero.jpg";
import LearnCard from "@/components/molecules/LearnCard";
import BoxedLayout from "@/components/templates/BoxedLayout";
import trade from "@/public/images/trade-learn.png";
import HomeFooter from "@/components/templates/HomePage/HomeFooter";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full">
      <Seo metaTitle="Learn" />
      <div className="w-full bg-white">
        <Layout>
          <Navbar />
        </Layout>
        <div>
          <Image src={forex} alt="" />
        </div>
        <BoxedLayout>
          <div className="flex flex-col gap-[37px] pb-20">
            <LearnCard
              image={trade}
              title="How to Trade Forex"
              desc="The School of Pipsology is the most popular forex trading course on planet Earth. Maybe even on Mars. Our online course is made for beginners to help them learn how to trade the currency markets. Did we mention it's totally free?"
              button="Start Course"
              link={"/learn/forex/courses"}
            />
            <LearnCard
              title="Trading Quizzes"
              desc="Want to challenge yourself with some fun trading quizzes? Test your knowledge on a variety of market-related topics and learn some new facts along the way! Your brain will love these quizzes as much as your face loves selfies."
              button="Test Yourself"
            />
            <LearnCard
              title="Forex Glossary"
              desc="Forexpedia is the original online forex glossary made specifically for forex traders. Enhancing your trading vocabulary is crucial if you want to able to follow the financial markets. Not only can you use it as a reference, but it'll help you sound really smart at parties."
              button="Learn New Lingo"
            />
          </div>
        </BoxedLayout>
      </div>
      <HomeFooter />
    </div>
  );
};

export default index;
