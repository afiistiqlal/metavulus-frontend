import React from "react";
import H3 from "../atoms/H3";
import OneLiner from "../atoms/OneLiner";

const ComingSoonPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      <OneLiner text="Coming Soon ..." />.
      <H3 text="Our website is under construction."/>
      <H3 text="We'll be launching soon."/>
    </div>
  );
};

export default ComingSoonPage;
