import React from "react";

type Props = {
  text: string;
  custom?: boolean;
  style?: any;
};

const ButtonPrimary = ({ text, custom, style }: Props) => {
  if (custom === true) {
    return (
      <button
        className={
          style +
          " " +
          "w-auto bg-mv-primary-3 text-white rounded-full shadow-md hover:bg-mv-secondary-1 transition-all ease-out"
        }
      >
        {text}
      </button>
    );
  }
  return (
    <button className=" bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out">
      {text}
    </button>
  );
};

export default ButtonPrimary;
