import Head from "next/head";
import React from "react";

type Props = {
  metaTitle?: string;
  metaDesc?: string;
  metaKey?: string;
};

const Seo = ({ metaDesc, metaKey, metaTitle }: Props) => {
  return (
    <Head>
      <title>{`Meta Vulus ${metaTitle ? "| " + metaTitle : ""}`}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={metaDesc} />
      <meta name="keyword" content={metaKey} />
    </Head>
  );
};

export default Seo;
