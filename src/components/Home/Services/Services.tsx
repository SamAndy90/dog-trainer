import Consultations from "./static/consultations.svg";
import Lessons from "./static/lessons.svg";
import Webinar from "./static/webinar.svg";
import { Container, Title } from "@/common/ui";
import Image from "next/image";

function Services() {
  return (
    <section id={"services"} className={"py-20"}>
      <Container>
        <div className={"mb-6 text-center"}>
          <Title className={"mb-5"}>Послуги</Title>
          <p className={"m-auto max-w-[500px] text-lg"}>
            Прагну зробити ваше спільне життя легким і радісним, враховуючи
            потреби песика та Ваші побажання.
          </p>
        </div>
        <div
          className={
            "flex flex-col justify-between  gap-7 py-4 sm:px-10 lg:flex-row"
          }>
          <div
            className={
              "mx-auto flex max-w-2xl flex-col items-center justify-start gap-7 rounded-3xl px-5 py-7 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] lg:basis-1/3"
            }>
            <Image src={Consultations} alt={"Icon"} />
            <h3 className={"text-2xl font-bold"}>Консультації</h3>
            <p className={"flex-auto self-start text-lg"}>
              Ви можете задати будь-які питання стосовно виховання, годування та
              догляду та отримати відповіді про все що Вас турбує.
            </p>
          </div>
          <div
            className={
              "mx-auto flex max-w-2xl flex-col items-center justify-start gap-7 rounded-3xl px-5 py-7 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] lg:basis-1/3"
            }>
            <Image src={Lessons} alt={"Icon"} />
            <h3 className={"text-2xl font-bold"}>Онлайн/офлайн заняття</h3>
            <ul
              className={
                "box-content flex-auto list-inside list-disc self-start text-lg"
              }>
              <li>
                Раз на тиждень (можливо і рідше, головне виконання домашніх
                завдань)
              </li>
              <li>Тривалість: заняття 1-1,5 год</li>
              <li>Робота над будь-якими проблемами, які вас турбують</li>
            </ul>
          </div>
          <div
            className={
              "mx-auto flex max-w-2xl flex-col items-center justify-start gap-7 rounded-3xl px-5 py-7 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] lg:basis-1/3"
            }>
            <Image src={Webinar} alt={"Icon"} />
            <h3 className={"text-2xl font-bold"}>Онлайн Вебінари</h3>
            <p className={"flex-auto self-start text-lg"}>
              Прямі ефіри, де я буду зосереджена на актуальних і турбуючих темах
              у сфері догляду за собаками. Учасники вебінарів зможуть отримати
              цінні поради та безпосередньо поспілкуватися зі мною, задавши
              питання, які їх найбільше турбують.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
