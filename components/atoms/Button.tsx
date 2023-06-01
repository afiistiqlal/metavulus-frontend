import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-auto bg-mv-gray-5 text-white rounded-lg shadow-md py-2 px-4">
      {text}
    </button>
  );
};

export default Button;
