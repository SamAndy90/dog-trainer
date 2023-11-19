import AboutBG from "./static/about-bg.jpg";
import { Container, Title } from "@/common/ui";
import Image from "next/image";

function About() {
  return (
    <section id={"about"}>
      <Container>
        <div className={"flex flex-col-reverse md:flex-row"}>
          <div className={"relative h-screen md:h-auto md:basis-1/2"}>
            <Image
              src={AboutBG}
              alt={"About Background"}
              fill
              className={"object-cover object-bottom"}
            />
          </div>
          <div
            className={
              "flex flex-col gap-8 py-20 text-center sm:px-4 md:basis-1/2 md:gap-10 md:pb-36 md:pt-24"
            }>
            <Title>Про мене</Title>
            <div
              className={
                "m-auto flex max-w-[500px] flex-col items-center gap-5 text-lg"
              }>
              <p>
                Професійний кінолог з 12річним досвідом та постійним підвищенням
                кваліфікації у різних напрямках.
              </p>
              <p>
                Як ваш особистий кінолог, я готова відповісти на будь-які
                питання про виховання, здоров&apos;я та догляд за собачкою, щоб
                зробити ваше спільне життя легким і радісним, враховуючи потреби
                песика та Ваші побажання.
              </p>
              <p>
                А ще я коргі-мама для лисинятка{" "}
                <span className={"font-semibold"}>Шерлока</span>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
