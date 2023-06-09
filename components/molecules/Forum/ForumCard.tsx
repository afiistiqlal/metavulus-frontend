import ProfilePicture from "@/components/atoms/ProfilePicture";
import React, { useState } from "react";

type Props = {};

const ForumCard = (props: Props) => {
  const [peopleLoop, setPeopleLoop] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]);
  return (
    <div className="flex w-auto shadow-xl py-5 rounded-xl justify-between px-10 border">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-sm">
          <ProfilePicture />
          <div className="flex gap-1">
            <div className="font-QuicksandBold">Name</div>
            <div className="font-QuicksandLight text-mv-gray-3">@name</div>
          </div>
          <div className="text-mv-gray-3">3hours ago</div>
        </div>
        <div className="font-QuicksandBold text-2xl border w-5/6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          inventore consequuntur impedit temporibus, expedita excepturi
          doloremque mollitia optio eius aliquam.
        </div>
        <div className="text-mv-gray-3 text-xs flex flex-col gap-2">
          <div className="">top people in loop</div>
          <div className="flex">
            {peopleLoop.reverse().map((v: any, i: number) => {
              return (
                <div className={`z-${v.id*10} -mr-2`} key={i}>
                  <ProfilePicture />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">A</div>
        <div className="">A</div>
        <div className="">A</div>
      </div>
    </div>
  );
};

export default ForumCard;
