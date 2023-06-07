import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-auto bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 m-2">
      {text}
    </button>
  );
};

export default Button;
