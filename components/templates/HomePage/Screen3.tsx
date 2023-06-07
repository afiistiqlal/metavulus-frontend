import React from "react";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import Paragraph from "@/components/atoms/Paragraph";

type Props = {};

const Screen3 = (props: Props) => {
  return (
    <div className="flex w-full justify-center my-4">
      <div className="w-1/3 bg-mv-primary-1 rounded-xl">
        <div className="w-[508px] h-[380px]"></div>
      </div>
      <div className="w-1/2 p-20">
        <HomePageSubHeader
          textColor="Learn"
          text=" and develop your
            trading skills"
        />
        <Paragraph text="Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices tincidunt ex, et rutrum lorem. Quisque at ex quam. Donec rhoncus eget ex porttitor tincidunt." />
        <div className="w-full">
          <ButtonPrimary text="View Courses" />
        </div>
      </div>
    </div>
  );
};

export default Screen3;
