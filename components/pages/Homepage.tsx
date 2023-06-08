import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/templates/HomePage/Hero";
import Screen2 from "@/components/templates/HomePage/Screen2";
import Screen3 from "../templates/HomePage/Screen3";
import Screen4 from "../templates/HomePage/Screen4";
import Ourmindset from "../templates/HomePage/Screen5";
import Screen6 from "../templates/HomePage/Screen6";
import HomeFooter from "../templates/HomePage/HomeFooter";
import Layout from "../templates/Layout";
import Seo from "../templates/Seo";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="bg-white relative">
      <Seo />
      <div className="w-full bg-mv-white-4">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <div className="w-full bg-mv-white-4">
        <Layout>
          <Hero />
        </Layout>
      </div>
      <Screen2 />
      <Layout>
        <Screen3 />
      </Layout>
      <div className="flex flex-col">
        <Screen4 />
        <Ourmindset />
        <Screen6 />
      </div>

      <HomeFooter />
    </div>
  );
};

export default Homepage;
