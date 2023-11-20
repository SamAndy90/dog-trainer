"use client";

import CardReview from "./CardReview";
import ReviewsBG from "./static/reviews.jpg";
import { Container, Title } from "@/common/ui";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Reviews() {
  return (
    <section id={"reviews"} className={"relative min-h-screen bg-black"}>
      <Container>
        <div
          className={
            "relative z-10 flex flex-col gap-14 py-16 sm:gap-16 md:gap-20 md:py-20 lg:gap-32"
          }>
          <Title className={"pt-4 text-center text-white"}>
            Відгуки моїх клієнтів &#10084;&#65039;
          </Title>
          <div className={"justify-self-stretch sm:px-10"}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1.1}
              centeredSlides={true}
              spaceBetween={15}
              autoHeight={true}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2.1,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}>
              {reviews.map((i) => {
                return (
                  <SwiperSlide className={"rounded-3xl"} key={i.id}>
                    <CardReview
                      name={i.name}
                      ocupation={i.ocupation}
                      text={i.text}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
      <Image
        src={ReviewsBG}
        alt={"Reviews background"}
        fill
        className={"object-cover object-top opacity-70"}
      />
    </section>
  );
}

export default Reviews;

export type ReviewType = {
  id: number;
  name: string;
  ocupation?: string;
  text: string;
};

const reviews: ReviewType[] = [
  {
    id: 1,
    name: "Юля з Джаредом",
    ocupation: "Коргі",
    text: "Best of the best кінологів💜 Якщо ви хочете в результаті тренінгу отримати психічно здорового комфортного собаку-друга, то вам однозначно сюди!Різносторонній підхід з розумом, не тільки однобока слухняність. Головне не забувати що результат тренінгу залежить не тільки від кінолога, а й від власника.",
  },
  {
    id: 2,
    name: "Даша і Вольт",
    ocupation: "Коргі",
    text: "Вибір собаки для мене став відповідальним, трепетним, і саме цю справу я вирішила довірити саме Віці! Маючи спочатку тривожного і невпевненого цуценя, я отримала здорову, що фізично, що психічно собаку прекрасну як у побуті, так і на вулиці. А чому? Тому що в мене був і є кінолог із знанням своєї справи! Індивідуальний підхід, вміння донести ПОТРІБНУ інформацію САМЕ ВАМ, а також безмежна підтримка та віра в успіх 🫶",
  },
  {
    id: 3,
    name: "Саша і Кріс",
    ocupation: "Коргі",
    text: "Віка – наш п'ятий за рахунком кінолог. Прийшовши до неї я зрозуміла, що тут потрібно залишитися) зараз у мене супер слухняний пес, який чує мене, який навчився грати та працювати за м'яч. Не знаю щоб ми робили без Вікі💜",
  },
];
