import React from "react";
import Navbar from "../organisms/Navbar";
import Layout from "./Layout";
import Breadcrumbs from "../molecules/Breadcrumbs";
import ButtonWhite from "../atoms/ButtonWhite";
import Header from "../atoms/Header";
import Paragraph from "../atoms/Paragraph";
import SubHeader from "../atoms/SubHeader";
import ButtonPrimary from "../atoms/ButtonPrimary";
import Image from "next/image";
import contestHead from "@/public/images/contesthead.png";
import contestFooter from "@/public/images/contestfooter.png"

type Props = {};

const EventContest = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <Breadcrumbs />
      <div className="flex flex-col items-center justify-center gap-4 mt-20">
        <ButtonWhite text="Contest" />
        <div className="mt-8 mb-4">
          <Header text="Your chance on Winning 1 BTC" />
        </div>
        <div className="font-QuicksandLight mb-10">January 31, 3033</div>
        <div className="w-1/2 h-auto mb-10">
          <Image src={contestHead} alt="" />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <Paragraph text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis ea aliquam modi nulla, rerum laudantium fuga perferendis. Enim adipisci accusantium laudantium distinctio placeat tempore laboriosam saepe veritatis aut illo et obcaecati minima, porro a molestias. In libero voluptate voluptas vero autem, aspernatur quae sed accusamus, ad consectetur distinctio iste sunt rem iure ea officiis cum obcaecati. Beatae reiciendis, consectetur enim facilis quidem sapiente, fugiat, rem nostrum alias praesentium dignissimos molestias pariatur? Doloribus magnam asperiores omnis cum, totam vitae magni esse iusto maxime ratione ut libero sequi molestiae sit inventore voluptates qui assumenda? Tenetur sed vel autem adipisci vero ex accusantium corrupti temporibus reiciendis porro itaque atque blanditiis facilis quidem impedit doloremque quam, a sit necessitatibus voluptatem saepe. Sed, quia." />
          <Paragraph text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis ea aliquam modi nulla, rerum laudantium fuga perferendis. Enim adipisci accusantium laudantium distinctio placeat tempore laboriosam saepe veritatis aut illo et obcaecati minima, porro a molestias. In libero voluptate voluptas vero autem, aspernatur quae sed accusamus, ad consectetur distinctio iste sunt rem iure ea officiis cum obcaecati. Beatae reiciendis, consectetur enim facilis quidem sapiente, fugiat, rem nostrum alias praesentium dignissimos molestias pariatur? Doloribus magnam asperiores omnis cum, totam vitae magni esse iusto maxime ratione ut libero sequi molestiae sit inventore voluptates qui assumenda? Tenetur sed vel autem adipisci vero ex accusantium corrupti temporibus reiciendis porro itaque atque blanditiis facilis quidem impedit doloremque quam, a sit necessitatibus voluptatem saepe. Sed, quia." />
          <Paragraph text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis ea aliquam modi nulla, rerum laudantium fuga perferendis. Enim adipisci accusantium laudantium distinctio placeat tempore laboriosam saepe veritatis aut illo et obcaecati minima, porro a molestias. In libero voluptate voluptas vero autem, aspernatur quae sed accusamus, ad consectetur distinctio iste sunt rem iure ea officiis cum obcaecati. Beatae reiciendis, consectetur enim facilis quidem sapiente, fugiat, rem nostrum alias praesentium dignissimos molestias pariatur? Doloribus magnam asperiores omnis cum, totam vitae magni esse iusto maxime ratione ut libero sequi molestiae sit inventore voluptates qui assumenda? Tenetur sed vel autem adipisci vero ex accusantium corrupti temporibus reiciendis porro itaque atque blanditiis facilis quidem impedit doloremque quam, a sit necessitatibus voluptatem saepe. Sed, quia." />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SubHeader text="How to win it?" />
        <Paragraph text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis ea aliquam modi nulla, rerum laudantium fuga perferendis. Enim adipisci accusantium laudantium distinctio placeat tempore laboriosam saepe veritatis aut illo et obcaecati minima, porro a molestias. In libero voluptate voluptas vero autem, aspernatur quae sed accusamus, ad consectetur distinctio iste sunt rem iure ea officiis cum obcaecati. Beatae reiciendis, consectetur enim facilis quidem sapiente, fugiat, rem nostrum alias praesentium dignissimos molestias pariatur? Doloribus magnam asperiores omnis cum, totam vitae magni esse iusto maxime ratione ut libero sequi molestiae sit inventore voluptates qui assumenda? Tenetur sed vel autem adipisci vero ex accusantium corrupti temporibus reiciendis porro itaque atque blanditiis facilis quidem impedit doloremque quam, a sit necessitatibus voluptatem saepe. Sed, quia." />
      </div>
      <div className="flex flex-col items-center mt-20">
        <ButtonPrimary text="Connect" />
        <div className="w-1/2 h-auto my-8">
          <Image src={contestFooter} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default EventContest;
