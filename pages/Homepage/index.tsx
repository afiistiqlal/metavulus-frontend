import Homepage from "@/components/pages/Homepage";
import Layout from "@/components/templates/Layout";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <Homepage />{" "}
    </Layout>
  );
};

export default index;
