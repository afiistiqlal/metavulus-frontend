import React from "react";

type Props = {
  text: string;
};

const ButtonPrimary = ({ text }: Props) => {
  return (
    <button className="w-auto bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out">
      {text}
    </button>
  );
};

export default ButtonPrimary;
