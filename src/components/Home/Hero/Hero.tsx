import HeroBG from "./static/hero-bg.jpg";
import { Container } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className={"relative box-border bg-black"}>
      <Container className={"flex h-full items-center justify-center"}>
        <div
          className={
            "z-10 flex min-h-screen flex-col items-center justify-center gap-y-7 py-16 text-center"
          }>
          <h1
            className={
              "text-5xl font-semibold text-white md:text-[68px] md:font-bold "
            }>
            <span
              className={
                "font-caveat text-6xl font-bold text-mainYellow-500 md:text-[88px] md:font-extrabold"
              }>
              Вікторія
            </span>{" "}
            - чарівна кінологиня
          </h1>
          <p
            className={
              "mb-7 max-w-[500px] text-lg font-medium text-white md:text-xl"
            }>
            Ваш експерт з комфортних відносин між Вами та Вашим песиком.
          </p>
          <Link
            href={"#contacts"}
            className={
              "transition-color w-full rounded-lg bg-mainYellow-500 px-8 py-3 font-semibold duration-300 hover:bg-mainYellow-700  hover:text-white sm:w-auto"
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
    </section>
  );
}

export default Hero;
