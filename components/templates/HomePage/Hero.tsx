import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientLine from "/public/gradientline.png";
import Iphone from "/public/iPhone.svg";
import Link from "next/link";
import Paragraph from "@/components/atoms/Paragraph";
import OneLiner from "@/components/atoms/OneLiner";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import brain from "@/public/images/barin.png";
import money from "@/public/images/money.png";
import bulet from "@/public/images/bulet.png";
import buletfil from "@/public/images/buletfill.png";
import segitiga from "@/public/images/segitiga.png";
import segitigafil from "@/public/images/segitigafill.png";
import arrow from "@/public/images/arrow.png";
import arrowhead from "@/public/images/arrowhead.png";

type Props = {};

const Hero = (props: Props) => {
  const icon = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };
  return (
    <div className="flex flex-col bg-hero bg-bottom bg-cover bg-no-repeat min-h-screen items-center rounded-b-[75px]">
      <div className="grid grid-cols-5 mt-10 lg:pt-24  relative">
        <div className="absolute">
          <svg
            width="1024"
            height="250"
            viewBox="0 0 1296 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M-36.5479 340.084C-33.1199 235.96 3.81654 24.6253 124.138 12.2846C274.541 -3.14125 583.058 340.084 804.163 340.084C1025.27 340.084 1245.09 50.8494 1279.79 16.1412"
              stroke="url(#paint0_linear_147_4)"
              stroke-opacity="0.4"
              stroke-width="3"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M-36.5479 340.084C-33.1199 235.96 3.81654 24.6253 124.138 12.2846C274.541 -3.14125 583.058 340.084 804.163 340.084C1025.27 340.084 1245.09 50.8494 1279.79 16.1412"
              stroke="url(#paint1_linear_147_4)"
              stroke-width="3"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M1282.99 9.5195C1284.44 8.98537 1285.92 10.2147 1285.66 11.7323L1283.12 26.5602C1282.86 28.0778 1281.06 28.7454 1279.87 27.762L1268.3 18.1529C1267.11 17.1695 1267.44 15.2725 1268.88 14.7384L1282.99 9.5195Z"
              fill="#5DB732"
              variants={icon}
              initial={{ translateX: -50, translateY: 50, opacity: 0 }}
              animate={{ translateX: 0, translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_147_4"
                x1="2138.71"
                y1="158.512"
                x2="96.5551"
                y2="76.4773"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55B328" />
                <stop offset="1" stop-color="#55B328" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_147_4"
                x1="1279.79"
                y1="11.7797"
                x2="1005.93"
                y2="263.239"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55B328" />
                <stop offset="1" stop-color="#55B328" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="">
          {/* <Image src={GradientLine} alt="" width={1300} height={328}/> */}
        </div>
        <div className="text-mv-secondary-1  relative">
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <OneLiner text="Meta" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[-20px] left-[-20px]"
          >
            <Image
              className="w-4/12"
              src={segitigafil}
              alt=""
              width={1000}
              height={10}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-[-30px] left-[-30px]"
          >
            <Image
              className="w-4/12"
              src={segitiga}
              alt=""
              width={100}
              height={0}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[-20px] left-[100px]"
          >
            <Image
              className="w-3/12"
              src={buletfil}
              alt=""
              width={100}
              height={0}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-[-30px] left-[150px]"
          >
            <Image
              className="w-4/12 object-contain"
              src={bulet}
              alt=""
              width={100}
              height={0}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-x-0"
        >
          <OneLiner text="Minds" />
        </motion.div>
        <div className="col-span-2 flex items-center ml-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="rounded-full border-mv-secondary-1 border w-14 h-14 flex items-center justify-center animate-ping"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-full bg-mv-secondary-1 w-12 h-12 absolute left-1"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              className="w-[80px] absolute top-[-15px] left-[-10px]"
            >
              <Image
                className="w-[73px] h-[73px] object-cover"
                src={brain}
                alt=""
                width={100}
                height={0}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className=""></div>
        <div className="col-span-1"></div>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <OneLiner text="Think" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-mv-primary-4"
        >
          <OneLiner text="Vulus" />
        </motion.div>
        <div className="flex items-center relative">
          <div className="rounded-full border-mv-primary-4 border w-14 h-14 flex items-center justify-center animate-ping"></div>
          <div className="rounded-full bg-mv-primary-4 w-12 h-12 absolute left-1">
            <div className="w-[70px] lg:w-[100px] absolute top-[-15px] left-[-11px] lg:top-[-15px] lg:left-[-13px]">
              <Image
                className="w-[73px] h-[73px] object-contain"
                src={money}
                alt=""
                width={100}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-6 w-full lg:w-1/3 text-center">
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nemo autem tempora modi debitis et voluptas sequi, consequatur
          deleniti perferendis ipsam ipsum asperiores neque beatae tenetur fuga.
          Ipsum, natus consequuntur!"
        />
      </div>
      <div className="m-4">
        <ButtonPrimary text="Get Started" />
      </div>
      <div className="flex flex-col w-full justify-end mt-auto">
        <div className="flex gap-4 ">
          <div className="flex justify-end w-1/3 relative rounded-bl-[75px] overflow-hidden ">
            <div className="rounded-full hidden lg:flex bg-mv-secondary-1 w-24 h-24"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center overflow-visible w-full mt-16 lg:mt-0 lg:w-1/3 relative z-20"
          >
            <Image
              src={Iphone}
              alt=""
              height={600}
              width={0}
              className="absolute"
            />
            <div className=""></div>
          </motion.div>
          <div className="w-1/3 h-96 overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
