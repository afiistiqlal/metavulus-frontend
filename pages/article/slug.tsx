import Navbar from "@/components/organisms/Navbar";
import BoxedLayout from "@/components/templates/BoxedLayout";
import Layout from "@/components/templates/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import placeholder from "@/public/images/placeholder-learn.png";
import BreadChumbs from "@/components/molecules/BreadChumbs";
import thumbnail from "@/public/images/thumbnail.jpg";
import articlebanner from "@/public/images/articlebanner.jpg";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";

type Props = {};

const slug = (props: Props) => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Meta Vulus</title>
      </Head>
      <div className="w-full bg-white shadow-xl z-20">
        <Layout>
          <Navbar />
        </Layout>
      </div>
      <div className="w-full px-4 lg:px-44 py-3 bg-white shadow-xl z-10">
        <BoxedLayout>
          <BreadChumbs
            category="News/Category"
            title="New Title"
            urlBefore={"/article"}
            urlCurrent={"/"}
          />
        </BoxedLayout>
      </div>
      <BoxedLayout>
        <div className="flex flex-col items-center mt-32 gap-4">
          <p className="font-QuicksandBold text-white text-[18px] px-14 py-4 rounded-xl bg-[#171B26]">
            Tag
          </p>
          <h1 className="lg:w-6/12 font-QuicksandBold text-[42px] leading-[42px] text-center">
            Networking the Trading Market: Unleashing the Power of Fractal
            Connections
          </h1>
          <p className="font-QuicksandMedium text-[18px] text-center w-6/12">
            January 31 2023
          </p>
        </div>
      </BoxedLayout>
      <BoxedLayout>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-center flex-wrap gap-6 mt-10 pb-10">
            <Image className="p-6" src={thumbnail} alt="" />
          </div>
          <div className="mt-5 pb-10">
            <p className="p-6 font-QuicksandSemibold text-[18px] text-justify leading-[18px]">
              Welcome to our blog, where we delve into the exciting realm of
              networking within the trading market and discover the remarkable
              potential of fractal connections. In the ever-evolving landscape
              of trading, the ability to connect with fellow traders and form
              meaningful relationships is a catalyst for growth and success. By
              harnessing the power of fractal connections, we can unlock a world
              of opportunities, insights, and collaborations that elevate our
              trading journey.
              <br />
              <br /> Networking within the trading market allows us to tap into
              a vast pool of knowledge, experiences, and perspectives. It offers
              us the chance to engage with like-minded individuals, share ideas,
              and exchange valuable insights. Through the magic of fractal
              connections, we uncover patterns of information flow, where ideas
              spread and evolve, leading to innovative strategies and new
              approaches to trading.
              <br /> <br /> Fractal networking serves as a conduit for
              inspiration, learning, and personal development. It cultivates an
              environment of support, where traders can seek guidance, receive
              feedback, and gain exposure to diverse perspectives. The power of
              networking lies in its ability to foster collaboration, encourage
              accountability, and provide access to a community that shares a
              common passion for trading success.
              <br /> <br /> In the interconnected world of trading, the
              influence of fractal connections cannot be underestimated. A
              single conversation, a shared chart analysis, or a serendipitous
              encounter can spark a chain reaction of ideas and opportunities
              that can shape our trading journey. By actively participating in
              the network, we open ourselves to a world of possibilities and
              establish connections that can propel us forward.
              <br /> <br /> So, lets embrace the power of fractal connections
              within the trading market. Lets foster a supportive community,
              where knowledge is shared, ideas flourish, and traders thrive.
              Together, we can leverage the strength of our network to amplify
              our trading potential and achieve new heights of success.
              <br /> <br />
              Join us on this exciting networking adventure, where fractals
              guide us to new connections, collaborations, and trading triumphs.
            </p>
          </div>

          <div>
            <ButtonPrimary text="Connect" />
          </div>

          <div className="mt-20 pb-32">
            <Image className="p-6" src={articlebanner} alt="" />
          </div>
        </div>
      </BoxedLayout>
    </div>
  );
};

export default slug;
