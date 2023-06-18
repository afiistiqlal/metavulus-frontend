import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import React from "react";

type Props = {};

const CommunityHeader = (props: Props) => {
  return (
    <div className="flex h-12 bg-mv-white-2 w-full">
      <div className="flex w-1/2 px-6 justify-start items-center">
        <Breadcrumbs />
      </div>
      <div className="flex w-1/2 px-6 justify-end items-center gap-4">
        <button>🔥Trending</button>
        <button>⏱️Latest</button>
      </div>
    </div>
  );
};

export default CommunityHeader;
