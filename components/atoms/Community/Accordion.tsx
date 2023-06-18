import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaHashtag } from "react-icons/fa";
import { motion } from "framer-motion";

type AccordionProps = {
  title: string;
  content: any;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full font-QuicksandRegular ">
      <button
        className="flex items-center uppercase w-full py-1 translate-all ease-out duration-200"
        onClick={handleToggle}
      >
        <span className="w-1/12 ">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </span>
        <span
          className={
            isOpen
              ? "w-11/12 flex text-mv-primary-1 items-center gap-1 hover:scale-105 translate-all ease-out duration-200"
              : "w-11/12 flex items-center gap-1 hover:scale-105 translate-all ease-out duration-200"
          }
        >
          <FaHashtag /> {title}
        </span>
      </button>
      {isOpen && (
        <div className="w-full ">
          {content.map((item: any, index: any) => (
            <motion.div
              initial={{ translateY: -10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex py-1"
              key={index}
            >
              <div className="w-1/12"> </div>
              <Link
                href={""}
                className="capitalize flex items-center w-11/12 gap-1 hover:scale-105 translate-all ease-out duration-200"
              >
                <FaHashtag /> {item}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
