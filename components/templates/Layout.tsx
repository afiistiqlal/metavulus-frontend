import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="text-base font-RobotoRegular leading-[15px] tracking-normal min-w-full max-w-main">
      {children}
    </div>
  );
};

export default Layout;
