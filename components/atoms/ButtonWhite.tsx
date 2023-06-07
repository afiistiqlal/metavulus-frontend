import React from "react";

type Props = {
  text: string;
};

const ButtonPrimary = ({ text }: Props) => {
  return (
    <button className="w-auto bg-mv-white-1 text-mv-primary-1 rounded-full shadow-md py-4 px-8">
      {text}
    </button>
  );
};

export default ButtonPrimary;
