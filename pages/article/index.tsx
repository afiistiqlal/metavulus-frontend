import Navbar from "@/components/organisms/Navbar";
import BoxedLayout from "@/components/templates/BoxedLayout";
import Layout from "@/components/templates/Layout";
import Seo from "@/components/templates/Seo";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import placeholder from "@/public/images/placeholder-learn.png";
import ArticleCard from "@/components/molecules/ArticleCard";
import { useRouter } from "next/router";
import HomeFooter from "@/components/templates/HomePage/HomeFooter";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const click = () => {
    router.push("/article/slug");
  };
  return (
    <div className="w-full">
      <Seo metaTitle="News" />
      <div className="w-full bg-white shadow-xl">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <BoxedLayout>
        <div className="flex flex-col items-center mt-32 gap-4">
          <h1 className="font-QuicksandBold text-center text-[44px] leading-[44px]">
            Whats <span className="text-[#78D64B]">Happening</span>
          </h1>
          <p className="font-QuicksandMedium text-[18px] text-center w-6/12">
            Stay ahead of the game by staying tuned for our frequent updates,
            where you can catch up on all the latest happenings, insights, and
            stories from our company.
          </p>
        </div>
      </BoxedLayout>
      <BoxedLayout>
        <div className="flex flex-row items-center justify-center flex-wrap gap-6 mt-10 pb-20">
          <div onClick={click} className="flex flex-col cursor-pointer">
            <div className="lg:w-[630px] overflow-hidden relative">
              <Image className="w-full" src={placeholder} alt="" />
              <div className="absolute top-10 left-10">
                <button className="text-white bg-black px-5 rounded-xl py-2 font-QuicksandBold text-[10px] ">
                  Tag
                </button>
              </div>
            </div>
            <div className="ml-10">
              <h3 className="font-QuicksandSemibold text-[35px] leading-[45px]">
                Some title for the blog
              </h3>
              <h3 className="font-QuicksandRegular text-[20px]">Date</h3>
            </div>
          </div>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </BoxedLayout>
      <HomeFooter />
    </div>
  );
};

export default Index;
