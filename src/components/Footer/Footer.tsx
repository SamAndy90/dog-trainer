import Facebook from "./static/Facebook";
import Instagram from "./static/Instagram";
import Telegram from "./static/Telegram";
import Tiktok from "./static/Tiktok";
import Vika from "./static/vika.jpg";
import Logo from "@/common/Logo";
import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer id={"contacts"} className={"bg-mainBrown-900 text-white"}>
      <Container>
        <div className={"py-16"}>
          <Title className={"mb-5 text-center md:mb-4"}>Контакти</Title>
          <div className={"flex flex-col justify-between gap-10 md:flex-row md:gap-4 "}>
            <div className={"flex flex-col items-center justify-start gap-4 md:flex-row"}>
              <div className={"relative h-[200px] w-[200px] overflow-hidden rounded-full"}>
                <Image
                  src={Vika}
                  alt={"Viktoria"}
                  fill
                  className={"object-cover"}
                />
              </div>
              <div className={"p-2.5 text-center text-3xl font-semibold md:text-left"}>
                <h3 className={"md:mb-2.5"}>
                  Кінолог <span className={"text-mainYellow-500"}>Віка</span>
                </h3>
                <h3>Чарівна кінологиня</h3>
              </div>
            </div>
            <div className={"flex flex-col items-center gap-8 md:items-stretch"}>
              <Link href={"/"}>
                <Logo />
              </Link>

              <div className={"flex flex-col gap-2.5"}>
                <a
                  className={"transition-colors hover:text-mainYellow-500"}
                  href={"mailto:example@gmail.com"}
                >
                  example@gmail.com
                </a>
                <a
                  className={"transition-colors hover:text-mainYellow-500"}
                  href={"tel:+38(099)-99-99-999"}
                >
                  +38(099)-99-99-999
                </a>
              </div>
              <div className={"flex items-start gap-5"}>
                <a
                  href={""}
                  className={"transition-transform hover:-translate-y-1"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Facebook />
                </a>
                <a
                  href={"https://instagram.com/kinolog.vika?igshid=MXVvMjNkOTJqdXY5cA=="}
                  className={"transition-transform hover:-translate-y-1"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Instagram />
                </a>
                <a
                  href={"https://t.me/kinolog_vika"}
                  className={"transition-transform hover:-translate-y-1"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Telegram />
                </a>
                <a
                  href={"https://www.tiktok.com/@kinolog_vika?_t=8hKnml9IwEQ&_r=1"}
                  className={"transition-transform hover:-translate-y-1"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Tiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
