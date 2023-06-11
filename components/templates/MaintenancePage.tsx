import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Metavulus Logo_PNG_Icon Color.png";
import Cone from "/public/images/maintenanceCone.png";
import HomePageSubHeader from "../molecules/HomePageSubHeader";
import Subtitle from "../atoms/Subtitle";
import Paragraph from "../atoms/Paragraph";
import ButtonPrimary from "../atoms/ButtonPrimary";

interface ContactFormElement extends EventTarget {
  email: {
    value: string;
  };
}

type Props = {};

const MaintenancePage = (props: Props) => {
  const emailHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as ContactFormElement;
    const { email } = target;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
      }),
    });

    if (response.ok) {
      alert("Your message has been sent.");

      email.value = "";
    } else {
      alert("Failed to send your message. Please try again.");
    }
  };
  return (
    <div className="flex min-w-full min-h-screen bg-maintenance bg-no-repeat bg-right bg-cover relative">
      <div className="absolute lg:top-[15%] lg:left-[40%] w-1/2 bottom-[15%] left-[25%] z-[0]">
        <Image
          src={Cone}
          alt="wave"
          className="object-contain overflow-hidden w-full"
        />
      </div>
      <div className="py-8 px-10 flex flex-col gap-2 lg:w-2/4 w-full">
        <Link href={"#"}>
          <Image
            className="w-[50px] mb-6"
            src={Logo}
            alt=""
            width={100}
            height={10}
          />
        </Link>
        <div className="flex lg:pt-0 pt-8">
          <HomePageSubHeader text="Ooooops" />{" "}
          <span className="text-mv-primary-1">
            <HomePageSubHeader text="." />
          </span>
        </div>
        <Subtitle text="We are currently under maintenance" />
        <Paragraph text="We're currently performing scheduled maintenance to improve our services. We apologize for the inconvenience caused." />
        <form
          onSubmit={emailHandler}
          className="flex justify-between lg:border rounded-full p-px focus:border-4 lg:flex-row flex-col gap-2 z-10"
        >
          <input
            type="text"
            name="email"
            className="lg:px-6 lg:py-0 py-3 px-4 text-mv-gray-3 focus:outline-current flex-auto rounded-3xl"
            placeholder="@ email address"
            required
          />
          <div className="">
            <ButtonPrimary
              text="Notify Me"
              custom
              style="w-full py-4 lg:px-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaintenancePage;
