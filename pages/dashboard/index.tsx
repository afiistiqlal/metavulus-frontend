import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Index = (props: Props) => {
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  const fetching = async () => {
    const loggedin = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const URL = `http://localhost:8080/account/${loggedin}`;
    const data = await fetch(URL);
    const user = await data.json();
    console.log(user);
    setUserData(user);
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <>
      <div className="text-black">
        Goblok Banget si {userData && userData.data?.email}
      </div>
      <div>Saya ini {userData && userData.data?.role}</div>
    </>
  );
};

export default Index;
