import Seo from "@/components/templates/Seo";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/organisms/Navbar";
import { BiSearch } from "react-icons/bi";
import HomePageSubHeader from "@/components/molecules/HomePageSubHeader";
import Subtitle from "@/components/atoms/Subtitle";
import Layout from "@/components/templates/Layout";
import EventsHero from "@/components/molecules/EventsHero";
import EventsCard from "@/components/molecules/EventsCard";
import { api } from "@/lib/graphql/api";
import { CATEGORIES, EVENTS } from "@/lib/graphql/query";

type Props = {};

export async function getServerSideProps() {
  const { events }: any = await api.request(EVENTS);
  const { eventCategories }: any = await api.request(CATEGORIES);

  return {
    props: {
      events,
      eventCategories,
    },
  };
}

const Events = ({ events: initialEvents, eventCategories }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const formatDate = (dateString: any) => {
    const options: any = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };

  const handleSearch = () => {
    const filtered = initialEvents.filter((event: any) => {
      if (!event.featured) {
        return event.eventTitle
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return true;
    });
    setEvents(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const filteredEvents = events.filter(
    (event: any) =>
      selectedCategory === "all" ||
      event.eventCategory.categoryTitle === selectedCategory
  );

  const featuredEvent = events.find((event: any) => event.featured);

  return (
    <>
      <Seo />
      <div>
        <Navbar />
        <Layout>
          <div className="flex flex-col text-center gap-8 justify-center w-1/2 mx-auto mt-20 mb-22">
            <HomePageSubHeader textColor="Our" text="Events" />
            <Subtitle text="Stay ahead of the game by staying tuned for our frequent updates, where you can catch up on all the latest happenings, insights, and stories from our company." />
          </div>

          {featuredEvent && (
            <div>
              <EventsHero
                category={featuredEvent.eventCategory.categoryTitle}
                title={featuredEvent.eventTitle}
                date={formatDate(featuredEvent.eventDate)}
                content={
                  featuredEvent.eventDescription.slice(0, 300) + "......"
                }
              />
            </div>
          )}

          <div className="w-full mt-10 mb-2 flex items-center px-6">
            <div className="w-1/2 flex gap-2 px-2">
              <div
                className={`border rounded-[30px] px-4 py-2 cursor-pointer hover:bg-mv-secondary-1 transition-all ease-out hover:text-white ${
                  selectedCategory === "all"
                    ? "bg-mv-secondary-1 text-white"
                    : ""
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </div>
              {eventCategories.map((v: any, i: number) => {
                return (
                  <div
                    key={i}
                    className={`border rounded-[30px] px-4                     // unchanged code
                    py-2 cursor-pointer hover:bg-mv-secondary-1 transition-all ease-out hover:text-white ${
                      selectedCategory === v.categoryTitle
                        ? "bg-mv-secondary-1 text-white"
                        : ""
                    }`}
                    onClick={() => setSelectedCategory(v.categoryTitle)}
                  >
                    {v.categoryTitle}
                  </div>
                );
              })}
            </div>
            <div className="w-1/2">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 grid-rows-2 mb-20 px-6">
            {filteredEvents.map((v: any, i: number) => {
              return (
                <div key={i}>
                  <EventsCard
                    title={v.eventTitle}
                    date={formatDate(v.eventDate)}
                    buttonText="Join"
                  />
                </div>
              );
            })}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Events;
