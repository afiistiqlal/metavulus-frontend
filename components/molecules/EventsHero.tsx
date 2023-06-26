import React from "react";
import SubHeader from "../atoms/SubHeader";
import { AiOutlineCalendar } from "react-icons/ai";
import Paragraph from "../atoms/Paragraph";
import { BiChair } from "react-icons/bi";
import EventMark from "../atoms/EventMark";

type Props = {
  title: string;
  date: string;
  content: string;
  category: string;
};

const EventsHero = ({ title, date, content, category }: Props) => {
  return (
    <div className="flex my-8 gap-6 py-4 px-6">
      <div className="w-1/2 bg-mv-secondary-6 rounded-xl relative">
        <EventMark />
      </div>
      <div className="w-1/2 py-6 ">
        <div className="flex flex-col gap-2">
          <div className="flex gap-8 text-mv-primary-1">
            <div className="">🔥Hot</div>
            <div className="flex gap-1 items-center">
              <BiChair /> {category}
            </div>
          </div>
          <div className="">
            <SubHeader text={title} />
          </div>
          <div className="text-xs text-mv-primary-1 flex gap-2 items-center mb-2">
            <AiOutlineCalendar /> <p>{date}</p>
          </div>
          <div className="text-gray-400">
            <Paragraph text={content} />
          </div>
          <div className="my-4">
            <button
              className="w-full bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
              type="submit"
            >
              Book a Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
