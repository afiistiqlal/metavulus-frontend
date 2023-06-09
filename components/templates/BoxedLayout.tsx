import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const BoxedLayout = ({ children }: Props) => {
  return (
    <div className="text-base font-RobotoRegular leading-[15px] tracking-normal mx-auto max-w-[1366px]">
      {children}
    </div>
  );
};

export default BoxedLayout;
