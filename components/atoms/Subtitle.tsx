import React from "react";

type Props = {
  text: string;
  menu?: any;
};

const Subtitle = ({ text, menu }: Props) => {
  if (menu === true) {
    return (
      <div className="sm:text-sm md:text-base lg:text-lg leading-5 font-QuicksandSemibold tracking-tight hover:bg-mv-secondary-1 py-1 px-3 rounded-xl hover:text-white transition-all ease-out">
        {text}
      </div>
    );
  }
  return (
    <div className="sm:text-sm md:text-base lg:text-lg leading-5 font-QuicksandSemibold tracking-tight ">
      {text}
    </div>
  );
};

export default Subtitle;
