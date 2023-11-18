import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Consultations from "./static/consultations.svg";
import Lessons from "./static/lessons.svg";
import Webinar from "./static/webinar.svg";

function Services() {
    return (
        <section id="services" className="py-20">
            <Container>
                <div className="text-center mb-6">
                    <Title className="mb-5">Послуги</Title>
                    <p className="max-w-[500px] text-lg m-auto">
                        Прагну зробити ваше спільне життя легким і радісним, враховуючи потреби
                        песика та Ваші побажання.
                    </p>
                </div>
                <div className="flex justify-between gap-7  py-4 sm:px-10 flex-col lg:flex-row">
                    <div className="flex flex-col items-center justify-start gap-7 rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-shadow duration-500 py-7 px-5 lg:basis-1/3 max-w-2xl mx-auto">
                        <Image src={Consultations} alt={"Icon"} />
                        <h3 className="text-2xl font-bold">Консультації</h3>
                        <p className="flex-auto text-lg self-start">
                            Ви можете задати будь-які питання стосовно виховання, годування та
                            догляду та отримати відповіді про все що Вас турбує.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-7 rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-shadow duration-500 py-7 px-5 lg:basis-1/3 max-w-2xl mx-auto">
                        <Image src={Lessons} alt={"Icon"} />
                        <h3 className="text-2xl font-bold">Онлайн/офлайн заняття</h3>
                        <ul className="flex-auto text-lg list-disc list-inside self-start box-content">
                            <li>
                                Раз на тиждень (можливо і рідше, головне виконання домашніх завдань)
                            </li>
                            <li>Тривалість: заняття 1-1,5 год</li>
                            <li>Робота над будь-якими проблемами, які вас турбують</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-7 rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-shadow duration-500 py-7 px-5 lg:basis-1/3 max-w-2xl mx-auto">
                        <Image src={Webinar} alt={"Icon"} />
                        <h3 className="text-2xl font-bold">Онлайн Вебінари</h3>
                        <p className="flex-auto text-lg self-start">
                            Прямі ефіри, де я буду зосереджена на актуальних і турбуючих темах у
                            сфері догляду за собаками. Учасники вебінарів зможуть отримати цінні
                            поради та безпосередньо поспілкуватися зі мною, задавши питання, які їх
                            найбільше турбують.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Services;
