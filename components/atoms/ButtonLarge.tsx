import React from "react";

type Props = {
  text: string;
};

const ButtonLarge = ({ text }: Props) => {
  return (
    <button className="w-auto bg-mv-gray-5 text-white rounded-lg shadow-md py-2 px-20">
      {text}
    </button>
  );
};

export default ButtonLarge;
