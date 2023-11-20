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
    title: "Консультації",
    description: "Навчу гуляти вас з собакою на розслабленому повідці",
  },
  {
    id: 2,
    icon: Icon2,
    altIcon: "Icon",
    title: "Непідбір",
    description: "Розкажу як навчити вашу собаку не підбирати їжу з полу",
  },
  {
    id: 3,
    icon: Icon3,
    altIcon: "Icon",
    title: "Страхи",
    description:
      "Допоможу заспокоїти вашу тривожну собачку. Також, працюю з шумовими фобіями та страхами обстрілів",
  },
  {
    id: 4,
    icon: Icon4,
    altIcon: "Icon",
    title: "Агресія",
    description: "Охорона ресурсів, їжі, іграшок, зооагресія",
  },
  {
    id: 5,
    icon: Icon5,
    altIcon: "Icon",
    title: "Базові команди",
    description: "Сидіти, лежати, стояти, поруч, до мене, побутова витримка",
  },
  {
    id: 6,
    icon: Icon6,
    altIcon: "Icon",
    title: "Трюки/Пуллери/Фрісбі",
    description: "Розважальні зайняття",
  },
];
