import ForumPage from "@/components/pages/ForumPage";
import HomeFooter from "@/components/templates/HomePage/HomeFooter";
import Seo from "@/components/templates/Seo";
import React from "react";

type Props = {};

const Forum = (props: Props) => {
  return (
    <div>
      <Seo metaTitle="Forum" />
      <ForumPage />
      <HomeFooter />
    </div>
  );
};

export default Forum;
