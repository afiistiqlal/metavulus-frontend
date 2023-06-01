import React from "react";

type Props = {
  text: string;
};

const GradientText = ({ text }: Props) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-mv-primary-2 to-mv-secondary-4">
      {text}{" "}
    </span>
  );
};

export default GradientText;
