import Image from "next/image";
import HeroBG from "./static/hero-bg.jpg";
import Arrow from "./static/Arrow.svg";
import { Container } from "@/common/ui";
import Link from "next/link";

function Hero() {
    return (
        <section className="h-screen relative bg-black">
            <Container className="flex items-center justify-center h-full">
                <div className="flex flex-col gap-y-7 items-center justify-center text-center z-10">
                    <h1 className="text-white font-semibold md:font-bold text-5xl md:text-[68px] ">
                        <span className="text-mainYellow-500 font-bold md:font-extrabold">
                            Вікторія
                        </span>{" "}
                        - чарівна кінологиня
                    </h1>
                    <p className="text-white text-lg md:text-2xl mb-7 max-w-[500px]">
                        Ваш експерт з комфортних відносин між Вами та Вашим песиком.
                    </p>
                    <Link
                        href={"#contacts"}
                        className={
                            "hover:bg-mainYellow-700 hover:text-white transition-color duration-300 bg-mainYellow-500 py-4 px-5 rounded-lg font-semibold  w-full sm:w-auto"
                        }>
                        Отримати консультацію
                    </Link>
                </div>
            </Container>
            <Image src={HeroBG} alt="Hero background" fill className="object-cover opacity-60" />
            <Link
                href={"#about"}
                className="absolute bottom-14 left-1/2 -translate-x-1/2 p-4 rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,.7)] transition-all">
                <Image src={Arrow} alt="Arrow" className="animate-bounce" />
            </Link>
        </section>
    );
}

export default Hero;
