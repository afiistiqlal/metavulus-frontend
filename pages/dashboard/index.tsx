import { useLoginContext } from "@/lib/hooks/useLogin";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Index = (props: Props) => {
  const { handleLogout } = useLoginContext();
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  const fetching = async () => {
    const loggedin = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const URL = `http://localhost:8080/account/${loggedin}`;
        const data = await fetch(URL);
        const user = await data.json();
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    } else {
      router.push("/login");
    }
  };

  const logout = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogout();
    router.push("/login");
  };

  useEffect(() => {
    fetching();
  }, []);
  if (userData == null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="uppercase text-[100px] font-bold">403 Forbiden</div>
      </div>
    );
  }
  return (
    <>
      <div className="text-black">
        Goblok Banget si {userData && userData.data?.email}
      </div>
      <div>Saya ini {userData && userData.data?.role}</div>

      <button onClick={logout} className="bg-slate-600 px-6 py-1 text-white">
        Logout
      </button>
    </>
  );
};

export default Index;
