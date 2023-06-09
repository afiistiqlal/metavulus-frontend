import React from "react";
import Navbar from "../organisms/Navbar";
import Layout from "./Layout";
import ForumSidebar from "../organisms/Forum/ForumSidebar";
import ForumMain from "../organisms/Forum/ForumMain";

type Props = {};

const ForumPageTemplate = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="shadow-xl z-10">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <div className="flex">
        <ForumSidebar />
        <ForumMain />
      </div>
    </div>
  );
};

export default ForumPageTemplate;
