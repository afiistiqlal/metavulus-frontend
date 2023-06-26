import React from "react";
import Navbar from "../organisms/Navbar";
import { BiSearch } from "react-icons/bi";
import HomePageSubHeader from "../molecules/HomePageSubHeader";
import Subtitle from "../atoms/Subtitle";
import Layout from "./Layout";
import EventsHero from "../molecules/EventsHero";
import EventsCard from "../molecules/EventsCard";
import { api } from "@/lib/graphql/api";
import { EVENTS } from "@/lib/graphql/query";

type Props = {};

export async function getServerSideProps() {
  const { events }: any = await api.request(EVENTS);

  return {
    Props: {
      events,
    },
  };
}

const EventsPageLayout = ({ events }: any) => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="flex flex-col text-center gap-8 justify-center w-1/2 mx-auto mt-20 mb-22">
          <HomePageSubHeader textColor="Our" text="Events" />
          <Subtitle text="Stay ahead of the game by staying tuned for our frequent updates, where you can catch up on all the latest happenings, insights, and stories from our company." />
          <label
            htmlFor="eventSearch"
            className="relative text-gray-400 focus-within:text-gray-600 block"
          >
            <BiSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-4 text-mv-primary-1" />
            <input
              className="w-full px-5 my-3 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
              type="text"
              name="eventSearch"
              id="eventSearch"
              placeholder="Search Events"
            />
          </label>
        </div>
        {events.map((v: any, i: number) => {
          return (
            <div key={i}>
              <EventsHero
                category="Conference"
                title="Metavulus Conference"
                date="January 31 2023"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nostrum labore atque placeat voluptatum error! Voluptates laudantium ratione animi amet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque culpa voluptates eaque quia, odit fugit commodi sit soluta dolor dolorum cum facere quis officia nihil! Nemo error et minima non ex harum rerum deserunt obcaecati consequatur, commodi dignissimos totam ullam ad praesentium quod dolores! Fugiat, consectetur a assumenda maiores 
              exercitationem, nobis temporibus autem repellendus modi nesciunt esse vitae, similique eius."
              />
            </div>
          );
        })}

        <div className="w-full mt-10 mb-2 flex items-center">
          <div className="w-1/2 flex gap-2 px-2">
            <div className="border rounded-[30px] px-4 py-2">all</div>
            <div className="border rounded-[30px] px-4 py-2">podcast</div>
            <div className="border rounded-[30px] px-4 py-2">contents</div>
            <div className="border rounded-[30px] px-4 py-2">Conference</div>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="eventSearch"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <BiSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-4 text-mv-primary-1" />
              <input
                className="w-full px-5 py-2 border border-[#E8E8E8] rounded-[30px] focus:outline-none focus:border-mv-primary-1 focus:border-2"
                type="text"
                name="eventSearch"
                id="eventSearch"
                placeholder="Search Events"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 grid-rows-2 mb-20">
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
          <EventsCard
            title="Daily Podcast Trading"
            date="January 31 2023"
            buttonText="Watch"
          />
        </div>
      </Layout>
    </div>
  );
};

export default EventsPageLayout;
