import React from "react";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-lg px-[72px]">
      <div className="flex min-h-screen my-11">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="header leading-none text-mv-primary-4 capitalize">
            The one <GradientText text="Connection" />
            that traders need
          </div>
          <h4 className="font-thin text-lg">
            Some description regarding the product, keep it simple, to the
            point, and catchy that could drive the readers to click on the CTA
            Below
          </h4>
          <Link href={"/"} className="btn btn-primary w-36 my-2">
            CTA
          </Link>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-center h-fullG">
            <div className="bg-mv-white-1 w-96 h-[310px] my-2 shadow-gradient rounded-xl">
              {/* <Image
                src={""}
                alt=""
                width={1}
                className="bg-mv-white-1 w-96 h-24 m-24 shadow-gradient rounded-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
