import React from "react";
import Navbar from "../organisms/Navbar";
import Layout from "./Layout";
import CommunitySidebar from "../organisms/Community/CommunitySidebar";
import CommunityMain from "../organisms/Community/CommunityMain";

type Props = {};

const CommunityPageTemplate = (props: Props) => {
  return (
    <div className="flex flex-col font-QuicksandRegular pb-20">
      <div className="shadow-xl z-10">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <div className="flex">
        <CommunitySidebar />
        <CommunityMain />
      </div>
    </div>
  );
};

export default CommunityPageTemplate;
