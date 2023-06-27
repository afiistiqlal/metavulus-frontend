import React from "react";
import EventMark from "../atoms/EventMark";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  buttonText: string;
  image?: any;
};

const EventsCard = ({ date, title, buttonText, image }: Props) => {
  return (
    <div className="flex flex-col gap-1 p-2 aspect-video">
      {!image ? (
        <div className="bg-mv-secondary-6 relative w-full lg:h-[15vw] h-[25vw] rounded-xl">
          <EventMark />{" "}
        </div>
      ) : (
        <div className="w-full lg:h-[15vw] h-[25vw] rounded-xl relative overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt={title}
            width={1000}
            height={100}
          />
          <EventMark />
        </div>
      )}
      <div className="px-2 py-1 flex flex-col gap-1">
        <div className="">
          <h3 className="font-QuicksandSemibold ">{title}</h3>
        </div>
        <div className="text-[10px] lg:text-xs mb-2 font-QuicksandLight">
          <p>{date}</p>
        </div>
        <div className="">
          <button
            className="w-full bg-mv-primary-3 text-white rounded-full shadow-md py-2 px-4 hover:bg-mv-secondary-1 transition-all ease-out"
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
