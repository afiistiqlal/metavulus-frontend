import React from "react";
import Paragraph from "../atoms/Paragraph";

type Props = {
  rightJustify?: boolean;
};

const AboutUsCard = ({ rightJustify }: Props) => {
  if (rightJustify) {
    return (
      <div className="flex flex-col p-4 gap-4 text-right items-end">
        <div className="bg-[#E4FFD7] w-[94px] h-[94px] flex items-center justify-center rounded-3xl">
          Logo
        </div>
        <div className="font-QuicksandBold text-2xl">Title</div>
        <div className="">
          <Paragraph
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        molestiae omnis dignissimos assumenda est iusto maiores nisi ratione sit
        beatae rem excepturi inventore dolores non voluptatem tempora aliquid
        incidunt, eos vero iste dicta repudiandae amet voluptatem itaque illo
        illum quibusdam explicabo. Quisquam omnis voluptatibus voluptas? Ipsa"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="bg-[#E4FFD7] w-[94px] h-[94px] flex items-center justify-center rounded-3xl">
        Logo
      </div>
      <div className="font-QuicksandBold text-2xl">Title</div>
      <div className="">
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        molestiae omnis dignissimos assumenda est iusto maiores nisi ratione sit
        beatae rem excepturi inventore dolores non voluptatem tempora aliquid
        incidunt, eos vero iste dicta repudiandae amet voluptatem itaque illo
        illum quibusdam explicabo. Quisquam omnis voluptatibus voluptas? Ipsa"
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
