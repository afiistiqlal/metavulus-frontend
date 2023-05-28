import Navbar from "@/components/Navbar";
import TradingJournal from "@/components/HomePage/Screen2";
import HomePage from "@/components/HomePage/Screen1";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <TradingJournal />
    </>
  );
}
