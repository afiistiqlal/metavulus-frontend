import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import OneLiner from "@/components/atoms/OneLiner";
import Subtitle from "@/components/atoms/Subtitle";
import React from "react";

type Props = {};

const GetLoop = (props: Props) => {
  return (
    <div className="w-auto py-12 flex flex-col items-center justify-center backdrop-blur-sm -mt-10">
      <div className="text-mv-primary-2">
        <OneLiner text="Get in the loop!" />
      </div>
      <div className="w-80 text-center my-4">
        <Subtitle text="Never again miss out on your favorite topics!" />
      </div>
      <div className="flex gap-4 my-4">
        <ButtonPrimary text="Connect" />
        <ButtonPrimary text="Join Our Discord" />
      </div>
    </div>
  );
};

export default GetLoop;
