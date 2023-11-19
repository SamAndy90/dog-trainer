import About from "@/components/Home/About/About";
import Guide from "@/components/Home/Guide/Guide";
import Helping from "@/components/Home/Helping/Helping";
import Hero from "@/components/Home/Hero/Hero";
import Reviews from "@/components/Home/Reviews/Reviews";
import Services from "@/components/Home/Services/Services";
import Telegram from "@/components/Home/Telegram/Telegram";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Guide />
      <Telegram />
      <Helping />
      <Reviews />
    </>
  );
}
