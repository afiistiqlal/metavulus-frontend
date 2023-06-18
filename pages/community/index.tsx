import CommunityPageTemplate from "@/components/templates/CommunityPageTemplate";
import HomeFooter from "@/components/templates/HomePage/HomeFooter";
import Seo from "@/components/templates/Seo";
import React from "react";

type Props = {};

const Community = (props: Props) => {
  return (
    <div>
      <Seo metaTitle="Community" />
      <CommunityPageTemplate />
      <HomeFooter />
    </div>
  );
};

export default Community;
