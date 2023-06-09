import React, { useState } from "react";

type AccordionProps = {
  title: string;
  content: string[];
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-2 font-QuicksandRegular">
      <button className="uppercase py-px" onClick={handleToggle}>
        <span className="">{isOpen ? "▽" : "△"}</span>
        <span className="m-2"><>#</> {title}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-px pl-12">
          {content.map((item, index) => (
            <p key={index} className="capitalize ">
              <span className="font-bold">#</span> {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
