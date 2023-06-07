import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center my-4">
      {children}
    </div>
  );
};

export default Container;
