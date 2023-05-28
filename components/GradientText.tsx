import React from "react";

type Props = {
  text: string;
};

const GradientText = ({ text }: Props) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600">
      {text}{" "}
    </span>
  );
};

export default GradientText;
