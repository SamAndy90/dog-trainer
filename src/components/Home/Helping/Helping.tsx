import Card from "./Card";
import Icon1 from "./static/icon1.svg";
import Icon2 from "./static/icon2.svg";
import Icon3 from "./static/icon3.svg";
import Icon4 from "./static/icon4.svg";
import Icon5 from "./static/icon5.svg";
import Icon6 from "./static/icon6.svg";
import { Container, Title } from "@/common/ui";

function Helping() {
  return (
    <section id={"helping"} className={"pb-7 pt-16"}>
      <Container>
        <div className={"py-4 text-center"}>
          <Title className={"mb-5"}>З чим я можу допомогти ?</Title>
        </div>
        <div
          className={"grid gap-7 py-5 sm:px-10 md:grid-cols-2 lg:grid-cols-3"}>
          {helpCardsData.map((i) => {
            return (
              <Card
                key={i.id}
                icon={i.icon}
                altIcon={i.altIcon}
                title={i.title}
                description={i.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Helping;

const helpCardsData = [
  {
    id: 1,
    icon: Icon1,
    altIcon: "Icon",
    title: "Прогулянка",
    description:
      "Навчу гуляти комфортно та легко без натяжки повідця та з кавусею 🫶🏻",
  },
  {
    id: 2,
    icon: Icon2,
    altIcon: "Icon",
    title: "Непідбір",
    description:
      "Розберемось в причинах та типах підбору та разом приберемо цю поведінку",
  },
  {
    id: 3,
    icon: Icon3,
    altIcon: "Icon",
    title: "Страхи",
    description:
      "Допоможу з фобіями і страхами адаптуватись під реалії життя в місті тривожній або погано соціалізованій собачці.",
  },
  {
    id: 4,
    icon: Icon4,
    altIcon: "Icon",
    title: "Агресія",
    description:
      "Охорона ресурсу (їжа,іграшки), зоогрессія (коти,собаки), пасивна-оборона через страхи, невміння конфліктувати, тощо",
  },
  {
    id: 5,
    icon: Icon5,
    altIcon: "Icon",
    title: "Базові команди",
    description:
      "Поруч,до мене, побутова витримка та розслаблення. Привчання до доглядових процедур.",
  },
  {
    id: 6,
    icon: Icon6,
    altIcon: "Icon",
    title: "Трюки/Пуллери/Фрісбі",
    description:
      "Тренування для підвищення контакту, фізичного та розумового розвитку",
  },
];
