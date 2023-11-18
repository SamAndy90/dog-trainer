import Arrow from "./static/Arrow.svg";
import HeroBG from "./static/hero-bg.jpg";
import { Container } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className={"relative h-screen bg-black"}>
      <Container className={"flex h-full items-center justify-center"}>
        <div
          className={
            "z-10 flex flex-col items-center justify-center gap-y-7 text-center"
          }>
          <h1
            className={
              "text-5xl font-semibold text-white md:text-[68px] md:font-bold "
            }>
            <span className={"font-bold text-mainYellow-500 md:font-extrabold"}>
              Вікторія
            </span>{" "}
            - чарівна кінологиня
          </h1>
          <p className={"mb-7 max-w-[500px] text-lg text-white md:text-2xl"}>
            Ваш експерт з комфортних відносин між Вами та Вашим песиком.
          </p>
          <Link
            href={"#contacts"}
            className={
              "transition-color w-full rounded-lg bg-mainYellow-500 px-5 py-4 font-semibold duration-300 hover:bg-mainYellow-700  hover:text-white sm:w-auto"
            }>
            Отримати консультацію
          </Link>
        </div>
      </Container>
      <Image
        src={HeroBG}
        alt={"Hero background"}
        fill
        className={"object-cover opacity-60"}
      />
      <Link
        href={"#about"}
        className={
          "absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full p-4 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,.7)]"
        }>
        <Image src={Arrow} alt={"Arrow"} className={"animate-bounce"} />
      </Link>
    </section>
  );
}

export default Hero;
