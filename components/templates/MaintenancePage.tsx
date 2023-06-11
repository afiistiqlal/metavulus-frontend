import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import HomePageSubHeader from "../molecules/HomePageSubHeader";
import Subtitle from "../atoms/Subtitle";
import Paragraph from "../atoms/Paragraph";
import ButtonPrimary from "../atoms/ButtonPrimary";

type Props = {};

const MaintenancePage = (props: Props) => {
  return (
    <Layout>
      <div className="py-8 px-10 flex flex-col gap-4 w-2/4">
        <Link href={"#"}>
          <Image
            className="w-[50px] mb-6"
            src={Logo}
            alt=""
            width={100}
            height={10}
          />
        </Link>
        <div className="flex">
          <HomePageSubHeader text="Ooooops" />{" "}
          <span className="text-mv-primary-1">
            <HomePageSubHeader text="." />
          </span>
        </div>
        <Subtitle text="We are currently under maintenance" />
        <Paragraph text="We're currently performing scheduled maintenance to improve our services. We apologize for the inconvenience caused." />
        <div className="flex justify-between border rounded-3xl p-px focus:border-4">
          <input
            type="text"
            className="px-6 text-mv-gray-3 focus:outline-current flex-auto rounded-3xl"
            placeholder="@ email address"
          />
          <div className="">
            <ButtonPrimary text="Notify Me" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MaintenancePage;
