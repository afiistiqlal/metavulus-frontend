import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 lg:gap-0 items-center my-4">
      {children}
    </div>
  );
};

export default Container;
