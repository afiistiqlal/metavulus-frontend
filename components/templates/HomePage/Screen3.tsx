import SubHeader from "@/components/atoms/SubHeader";
import React from "react";

type Props = {};

const Screen3 = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-24 w-full mb-20">
      <SubHeader text="There's pattern somewhere" />
      <div className="flex w-full p-6">
        <div className="w-1/2">
          <div className="border rounded-full w-10 h-10 flex justify-center items-center"></div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="border rounded-full w-10 h-10 flex justify-center items-center"></div>
        </div>
      </div>

      <div className="flex w-full justify-center my-2">
        <div className="w-1/3">
          <div className="border-4 rounded-full w-10 h-10 flex justify-center items-center"></div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="border rounded-full w-10 h-10 flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
