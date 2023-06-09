import React from "react";

type Props = {};

const ForumSearch = (props: Props) => {
  return (
    <div className="flex border rounded-lg w-auto">
      <input
        type="text"
        name="searchChannel"
        id="searchChannel"
        placeholder="Search Channels #"
        className="w-full py-2 px-2 focus:outline-none bg-mv-white-3 font-QuicksandRegular text-base focus:text-mv-gray-3"
      />
      <button className="bg-mv-white-3 hover:bg-mv-white-5 rounded-r-lg px-3 hover:ease-in-out duration-75">🔍</button>
    </div>
  );
};

export default ForumSearch;
