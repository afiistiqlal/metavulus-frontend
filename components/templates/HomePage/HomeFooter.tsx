import React, { FormEvent } from "react";
import Image from "next/image";
import Icon from "/public/Metavulus Logo_PNG_Icon Color.png";
import Container from "@/components/atoms/Container";
import Layout from "../Layout";

type Props = {};

interface ContactFormElement extends EventTarget {
  email: {
    value: string;
  };
}

const HomeFooter = (props: Props) => {
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
    <Layout>
      <div className="mt-10 flex flex-col lg:flex-row pb-10 w-full p-6 lg:p-0">
        <div className="lg:w-3/12 flex flex-col gap-5">
          <figure>
            <Image src={Icon} alt="" width={84} height={84} />
          </figure>
          <div className="w-10/12">
            <p className="font-QuicksandMedium text-[#ABABAB] text-[18px] leading-[22px]">
              Jl Jend Gatot Subroto Bl II/7 Kawasan Industri Candi,
              <br /> Jawa Tengah
            </p>
          </div>
        </div>
        <div className="w-9/12 flex flex-col">
          <div className="w-full flex flex-col mt-10 lg:mt-0 lg:flex-row justify-end gap-5 lg:gap-20 ">
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Company
              </h3>
              <ul className="flex flex-col font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Products
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Learn
              </h3>
              <ul className="flex flex-col font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Crypto
                </li>
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Forex
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Career
              </h3>
              <ul className="flex flex-col font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Students
                </li>
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Professionals
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Resources
              </h3>
              <ul className="flex flex-col font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  News
                </li>
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  Forum
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Contact
              </h3>
              <ul className="flex flex-col font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="cursor-pointer hover:text-[#b4b4b4] transition-all ease-out">
                  FAQ
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-QuicksandBold text-[18px] leading-[12px] text-[#55B328]">
                Follow Our Socials
              </h3>
              <ul className="flex flex-row font-QuicksandMedium text-[18px] leading-[12px] gap-6">
                <li className="hover:scale-150 transition-all ease-out">
                  <svg
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6874 9.27874C19.7004 9.46832 19.7004 9.65682 19.7004 9.84532C19.7004 15.6141 15.6474 22.2614 8.24044 22.2614C5.95844 22.2614 3.83844 21.5453 2.05444 20.3017C2.37844 20.3417 2.69044 20.3558 3.02744 20.3558C4.84044 20.3606 6.60209 19.7038 8.02844 18.4914C7.18786 18.4749 6.37302 18.1745 5.69768 17.632C5.02234 17.0896 4.52023 16.3322 4.26144 15.4657C4.51044 15.5057 4.76044 15.5328 5.02244 15.5328C5.38344 15.5328 5.74644 15.4787 6.08344 15.3844C5.1712 15.1849 4.35092 14.6492 3.76206 13.8685C3.17321 13.0878 2.85214 12.1102 2.85344 11.102V11.0478C3.39044 11.3717 4.01344 11.5743 4.67344 11.6014C4.12053 11.2034 3.66716 10.6633 3.35378 10.0293C3.0404 9.39526 2.87676 8.68708 2.87744 7.96791C2.87744 7.15757 3.07644 6.41441 3.42544 5.76657C4.43758 7.11534 5.69995 8.21876 7.13078 9.00537C8.56161 9.79197 10.129 10.2442 11.7314 10.3328C11.6694 10.0078 11.6314 9.67091 11.6314 9.33291C11.6312 8.75978 11.7352 8.19222 11.9375 7.66267C12.1399 7.13311 12.4365 6.65195 12.8106 6.24669C13.1847 5.84143 13.6289 5.52002 14.1177 5.30082C14.6065 5.08163 15.1304 4.96895 15.6594 4.96924C16.8194 4.96924 17.8664 5.49574 18.6024 6.34724C19.5042 6.15832 20.369 5.8017 21.1584 5.29316C20.8579 6.30154 20.2282 7.1566 19.3874 7.69816C20.1872 7.59933 20.9689 7.37148 21.7064 7.02216C21.1556 7.89218 20.473 8.65511 19.6874 9.27874Z"
                      fill="#55B328"
                    />
                  </svg>
                </li>
                <li className="hover:scale-150 transition-all ease-out">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7471 9.61239C22.7362 8.7919 22.5826 7.97957 22.2932 7.21173C22.0422 6.56406 21.6589 5.97586 21.1678 5.48471C20.6766 4.99356 20.0884 4.61026 19.4408 4.35931C18.6828 4.07478 17.882 3.92093 17.0726 3.90431C16.0304 3.85773 15.7 3.84473 13.0545 3.84473C10.409 3.84473 10.0699 3.84473 9.03535 3.90431C8.22627 3.92105 7.4259 4.0749 6.66827 4.35931C6.0205 4.61009 5.43221 4.99332 4.94104 5.4845C4.44987 5.97567 4.06663 6.56396 3.81585 7.21173C3.53075 7.96912 3.37724 8.76968 3.36194 9.57881C3.31535 10.6221 3.30127 10.9525 3.30127 13.598C3.30127 16.2435 3.30127 16.5815 3.36194 17.6171C3.37819 18.4275 3.53094 19.227 3.81585 19.9864C4.06705 20.634 4.45057 21.222 4.94191 21.713C5.43324 22.2039 6.02159 22.587 6.66935 22.8377C7.42491 23.1337 8.22542 23.2986 9.03644 23.3252C10.0797 23.3718 10.4101 23.3859 13.0556 23.3859C15.7011 23.3859 16.0402 23.3859 17.0748 23.3252C17.8842 23.3093 18.685 23.1558 19.4429 22.8713C20.0904 22.6201 20.6785 22.2367 21.1696 21.7456C21.6607 21.2544 22.0441 20.6664 22.2954 20.0189C22.5803 19.2606 22.733 18.4611 22.7493 17.6496C22.7959 16.6075 22.8099 16.2771 22.8099 13.6305C22.8078 10.985 22.8078 10.6491 22.7471 9.61239ZM13.048 18.6008C10.2812 18.6008 8.03977 16.3594 8.03977 13.5926C8.03977 10.8257 10.2812 8.58431 13.048 8.58431C14.3763 8.58431 15.6502 9.11196 16.5894 10.0512C17.5286 10.9904 18.0563 12.2643 18.0563 13.5926C18.0563 14.9208 17.5286 16.1947 16.5894 17.1339C15.6502 18.0732 14.3763 18.6008 13.048 18.6008ZM18.2556 9.56689C18.1022 9.56703 17.9503 9.53693 17.8085 9.47829C17.6668 9.41965 17.538 9.33363 17.4295 9.22516C17.321 9.11669 17.235 8.98789 17.1764 8.84614C17.1177 8.70439 17.0876 8.55246 17.0878 8.39906C17.0878 8.24577 17.118 8.09398 17.1766 7.95236C17.2353 7.81073 17.3213 7.68205 17.4297 7.57366C17.5381 7.46527 17.6667 7.37928 17.8084 7.32062C17.95 7.26196 18.1018 7.23177 18.2551 7.23177C18.4084 7.23177 18.5601 7.26196 18.7018 7.32062C18.8434 7.37928 18.9721 7.46527 19.0805 7.57366C19.1889 7.68205 19.2748 7.81073 19.3335 7.95236C19.3922 8.09398 19.4224 8.24577 19.4224 8.39906C19.4224 9.04473 18.9002 9.56689 18.2556 9.56689Z"
                      fill="#55B328"
                    />
                    <path
                      d="M13.0479 16.8459C14.8446 16.8459 16.3012 15.3893 16.3012 13.5926C16.3012 11.7959 14.8446 10.3394 13.0479 10.3394C11.2512 10.3394 9.79468 11.7959 9.79468 13.5926C9.79468 15.3893 11.2512 16.8459 13.0479 16.8459Z"
                      fill="#55B328"
                    />
                  </svg>
                </li>
                <li className="hover:scale-150 transition-all ease-out">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1095 5.23022C15.8943 5.61555 15.7026 6.0135 15.5353 6.42189C13.8916 6.16195 12.2173 6.16195 10.5736 6.42189C10.4064 6.0135 10.2146 5.61555 9.99948 5.23022C8.45116 5.49478 6.946 5.96856 5.52531 6.63856C2.98483 10.3049 1.8327 14.7559 2.27531 19.1944C3.9309 20.439 5.78906 21.3882 7.76781 22.0002C8.21838 21.405 8.6205 20.7747 8.97031 20.1152C8.32472 19.8772 7.70421 19.576 7.11781 19.2161C7.27864 19.109 7.43078 18.9895 7.57281 18.8586C9.28281 19.6822 11.1564 20.11 13.0545 20.11C14.9525 20.11 16.8261 19.6822 18.5361 18.8586C18.6878 18.9886 18.8395 19.1077 18.9911 19.2161C18.4015 19.5732 17.7817 19.8777 17.1386 20.1261C17.4739 20.8005 17.8653 21.4455 18.3086 22.0544C20.2849 21.4445 22.1399 20.495 23.7903 19.2486C24.2435 14.8093 23.0905 10.3546 20.5403 6.69272C19.1356 6.00886 17.6453 5.51695 16.1095 5.23022ZM9.45781 16.6594C8.91569 16.6205 8.40973 16.3731 8.04614 15.9691C7.68255 15.5651 7.4896 15.0359 7.50781 14.4927C7.48686 13.9488 7.67885 13.4181 8.04299 13.0136C8.40712 12.609 8.91469 12.3623 9.45781 12.3261C10.0009 12.3623 10.5085 12.609 10.8726 13.0136C11.2368 13.4181 11.4288 13.9488 11.4078 14.4927C11.4288 15.0366 11.2368 15.5673 10.8726 15.9719C10.5085 16.3765 10.0009 16.6231 9.45781 16.6594ZM16.6511 16.6594C16.109 16.6205 15.6031 16.3731 15.2395 15.9691C14.8759 15.5651 14.6829 15.0359 14.7011 14.4927C14.6802 13.9488 14.8722 13.4181 15.2363 13.0136C15.6005 12.609 16.108 12.3623 16.6511 12.3261C17.1953 12.3596 17.7045 12.6055 18.0692 13.0107C18.4339 13.4159 18.6249 13.9481 18.6011 14.4927C18.6249 15.0374 18.4339 15.5696 18.0692 15.9748C17.7045 16.38 17.1953 16.6258 16.6511 16.6594Z"
                      fill="#55B328"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row lg:justify-end w-full  mt-[50px]">
            <form
              onSubmit={emailHandler}
              className="flex flex-col gap-5 items-end"
            >
              <input
                className="lg:w-[383px] border border-[#E8E8E8] rounded-[30px] px-[26px] py-[16px]"
                placeholder="@ Email Address"
                type="email"
                name="email"
                id="email"
                required
              />
              <div>
                <button
                  className="px-[19px] py-[11px] bg-[#55B328] text-white font-QuicksandSemibold text-[16px] leading-[24px] rounded-[30px] hover:bg-mv-secondary-1 transition-all ease-out duration-200"
                  type="submit"
                >
                  Subscribe to Our Newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeFooter;
