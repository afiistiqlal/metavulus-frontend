import H3 from "@/components/atoms/H3";
import OneLiner from "@/components/atoms/OneLiner";
import Navbar from "@/components/organisms/Navbar";
import Layout from "@/components/templates/Layout";
import Seo from "@/components/templates/Seo";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full">
      <Seo />
      <div className="w-full bg-white">
        <Layout>
          <Navbar />
        </Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white w-full gap-1 overflow-hidden">
          <div className="m-4">
            <OneLiner text="Coming Soon ..." />
          </div>
          <H3 text="Our website is under construction." />
          <H3 text="We'll be launching soon." />
        </div>
      </div>
    </div>
  );
};

export default index;
