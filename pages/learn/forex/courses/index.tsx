import Navbar from "@/components/organisms/Navbar";
import BoxedLayout from "@/components/templates/BoxedLayout";
import Layout from "@/components/templates/Layout";
import Seo from "@/components/templates/Seo";
import Image from "next/image";
import React from "react";
import trade from "@/public/images/trade-learn.png";
import progress from "@/public/images/progress.png";
import BreadChumbs from "@/components/molecules/BreadChumbs";
import { useRouter } from "next/router";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import CourseCard from "@/components/molecules/CourseCard";
import Head from "next/head";
import HomeFooter from "@/components/templates/HomePage/HomeFooter";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const url = router.pathname;

  const login = () => {
    router.push("/login");
  };
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Meta Vulus</title>
      </Head>
      <div className="w-full bg-white shadow-lg z-20">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <div className="w-full px-4 lg:px-44 py-3 bg-white shadow-xl z-10">
        <BoxedLayout>
          <BreadChumbs
            category="Learn Forex"
            title="School Of Pipsology"
            urlBefore={"/learn/forex"}
            urlCurrent={url}
          />
        </BoxedLayout>
      </div>

      <div className="w-full bg-white shadow-xl rounded-b-[70px] py-16">
        <Layout>
          <div className="flex flex-col items-center h-full pb-20">
            <div className="flex flex-col items-center relative">
              <figure className="w-8/12 relative">
                <Image className="object-fill" src={trade} alt="" />
              </figure>
              <div className="absolute lg:w-6/12 bottom-[-50px]">
                <Image className="w-full " src={progress} alt="" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center w-8/12 gap-8 mt-10">
              <h1 className="font-QuicksandBold text-[44px] leading-10">
                School of Pipsology
              </h1>
              <p className="text-[23px] leading-[24px] font-QuicksandRegular">
                The School of Pipsology is the most popular forex trading course
                on planet Earth. Maybe even on Mars. Our online course is made
                for beginners to help them learn how to trade the currency
                markets. Did we mention its totally free?
              </p>
              <div onClick={login}>
                <ButtonPrimary
                  custom
                  style={"px-5 py-2 Lg:px-[94px] lg:py-[17px]"}
                  text="Sign In to Track Your Progress"
                />
              </div>
            </div>
          </div>
        </Layout>
      </div>

      <div className="mt-14">
        <BoxedLayout>
          <div className="flex flex-col gap-5 pb-20 px-4">
            <CourseCard
              id="1"
              title="Preschool"
              desc="Currency trading? Forex trading? FX trading? Totally clueless about forex? Heres an introduction to the foreign exchange market."
            />

            <CourseCard
              id="2"
              title="Elementary"
              desc="Currency trading? Forex trading? FX trading? Totally clueless about forex? Heres an introduction to the foreign exchange market."
            />
          </div>
        </BoxedLayout>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Index;
