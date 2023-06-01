import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Screen1 from "@/components/templates/HomePage/Screen1";
import Screen2 from "@/components/templates/HomePage/Screen2";
import Screen3 from "../templates/HomePage/Screen3";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Screen1 />
      <Screen2 />
    </div>
  );
};

export default Homepage;
