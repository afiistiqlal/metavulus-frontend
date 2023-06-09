import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaHashtag } from "react-icons/fa";

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
    <div className="w-full font-QuicksandRegular">
      <button
        className="flex items-center uppercase w-full py-1"
        onClick={handleToggle}
      >
        <span className="w-1/12">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </span>
        <span className="w-11/12 flex items-center gap-1">
          <FaHashtag /> {title}
        </span>
      </button>
      {isOpen && (
        <div className="w-full">
          {content.map((item, index) => (
            <div className="flex py-1">
              <div className="w-1/12"> </div>
              <Link
                href={""}
                key={index}
                className="capitalize flex items-center w-11/12 gap-1"
              >
                <FaHashtag /> {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
