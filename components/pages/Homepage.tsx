import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/templates/HomePage/Hero";
import Screen2 from "@/components/templates/HomePage/Screen2";
import Screen3 from "../templates/HomePage/Screen3";
import Screen4 from "../templates/HomePage/Screen4";
import Screen5 from "../templates/HomePage/Screen5";
import Screen6 from "../templates/HomePage/Screen6";
import HomeFooter from "../templates/HomePage/HomeFooter";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
      <HomeFooter />
    </div>
  );
};

export default Homepage;
