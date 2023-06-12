import OneLiner from "@/components/atoms/OneLiner";
import Navbar from "@/components/organisms/Navbar";
import Layout from "@/components/templates/Layout";
import React from "react";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import ManWithLaptop from "/public/images/aboutusmanwithlaptop.png";
import Happyman from "/public/images/aboutushappyman.png";
import Image from "next/image";
import AboutUsCard from "@/components/molecules/AboutUsCard";
import Screen6 from "@/components/templates/HomePage/Screen6";
import lampu from "@/public/icon/lampu.svg";
import connect from "@/public/icon/connect.svg";
import grow from "@/public/icon/grow.svg";
import AboutUsCardFooter from "@/components/molecules/AboutUsCardFooter";
import Paragraph from "@/components/atoms/Paragraph";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className="bg-aboutusheader bg-cover rounded-b-[75px] h-full text-white bg-no-repeat py-10 mb-12">
        <Layout>
          <Navbar />
          <div className="flex flex-col items-center justify-center h-96 gap-8">
            <OneLiner text="The beauty of connection" />
            <Paragraph text="Learn how we bring connection to the trading community" />
          </div>
        </Layout>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:px-[72px] lg:px-[72px]">
        <div className="w-[60px]">
          <Image src={Logo} alt="" width={100} height={10} />
        </div>
        <div className="flex items-center ">
          <div className="text-[48px] font-QuicksandBold tracking-normal leading-[48px]">
            Behind the <span className="text-mv-secondary-4">Logo</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <AboutUsCard />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src={ManWithLaptop} alt="" width={400} height={400} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <AboutUsCard rightJustify />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <AboutUsCard />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="bg-aboutusfooter bg-contain bg-bottom h-[800px] w-full relative bg-no-repeat flex">
        <div className="w-80 h-full absolute left-[8%] top-[14%]">
          <Image src={Happyman} alt="" width={300} height={300} priority />
        </div>
        <div className="flex justify-end w-full items-center mr-20">
          <div className="w-3/5 h-96 lg:mt-40 flex flex-col justify-center">
            <div className="text-[48px] font-QuicksandBold tracking-normal leading-[48px] text-mv-primary-2 text-center">
              What we stand for
            </div>
            <div className="flex gap-2">
              <AboutUsCardFooter
                image={lampu}
                title="Learn."
                paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
              />
              <AboutUsCardFooter
                image={connect}
                title="Connect."
                paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
              />
              <AboutUsCardFooter
                image={grow}
                title="Grow."
                paragraph="We are committed to continuous learning and personal development. We believe that knowledge is the foundation of success in the trading world. We encourage a growth mindset, actively seeking opportunities to expand our skills, deepen our understanding of the markets, and stay updated with industry trends. We embrace curiosity, open-mindedness, and a dedication to ongoing education"
              />
            </div>
          </div>
        </div>
      </div>
      <Screen6 />
    </>
  );
};

export default index;
