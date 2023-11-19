import TelegramBG from "./static/telegram-bg.jpg";
import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";

function Telegram() {
  return (
    <section id={"telegram"} className={"relative bg-black pb-10 pt-14"}>
      <Container>
        <div
          className={
            "relative z-10 mx-auto flex max-w-[600px] flex-col items-center gap-8 py-5 text-center"
          }>
          <Title className={"text-white"}>
            Телеграм Канал <br />
            <span
              className={
                "font-caveat text-5xl text-mainYellow-500 md:text-6xl"
              }>
              &quot;Слухняні Пиріжечки&quot;
            </span>
          </Title>
          <p className={"text-lg text-white md:text-xl"}>
            Ком’юніті свідомих господарів собак, які прагнуть ділитися досвідом,
            навчатися, та підтримувати один одного.
          </p>
          <Link
            href={"https://t.me/+acx0QxsdlGUzZWUy"}
            target={"_blank"}
            className={
              "transition-color rounded-lg bg-mainYellow-500 px-8 py-3 font-semibold duration-300 hover:bg-mainYellow-600 hover:text-white sm:self-center"
            }>
            Перейти
          </Link>
        </div>
      </Container>
      <Image
        src={TelegramBG}
        alt={"Telegram background"}
        fill
        className={"-z-0 object-cover opacity-40"}
      />
    </section>
  );
}

export default Telegram;
