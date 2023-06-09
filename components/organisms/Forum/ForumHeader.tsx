import Breadcrumb from "@/components/atoms/Forum/Breadcrumb";
import React from "react";

type Props = {};

const ForumHeader = (props: Props) => {
  return (
    <div className="flex h-12 bg-mv-white-2 w-full">
      <div className="flex w-1/2 px-6 justify-start items-center">
        <Breadcrumb text={'Trading Discussion / # New and Economy'} />
      </div>
      <div className="flex w-1/2 px-6 justify-end items-center gap-4">
        <button>🔥Trending</button>
        <button>⏱️Latest</button>
      </div>
    </div>
  );
};

export default ForumHeader;
