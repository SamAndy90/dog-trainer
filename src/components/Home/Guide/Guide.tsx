import GuideBG from "./static/guide-bg.jpg";
import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";

function Guide() {
  return (
    <section id={"guide"}>
      <Container>
        <div className={"flex flex-col md:flex-row"}>
          <div
            className={
              "flex flex-col gap-8 py-20 text-center sm:px-4 md:basis-1/2 md:gap-12 md:py-24"
            }>
            <Title>Як обрати цуценя?</Title>
            <div className={"flex flex-col gap-5 text-left text-lg"}>
              <p>Вибір цуценя – це вибір супутника на довгі 15 років.</p>
              <p>
                Мій детальний гайд дасть вам важливі знання, які допоможуть
                зробити цей вибір відповідально та обдумано.
              </p>

              <ul>
                <li>- На що звернути увагу при візуальному огляді цуца?</li>
                <li>
                  - Які папірці повинні бути при придбанні цуца( з документами
                  чи без, стандарти обробок/вакцин та чіпування обовʼязкове)
                </li>
                <li>- На що звертати увагу при знайомстві з батьками цуца?</li>
                <li>- Базові умови утримання та питання розпліднику.</li>
              </ul>
            </div>
            <Link
              href={"https://secure.wayforpay.com/payment/s94ea0e6b54e2"}
              target={"_blank"}
              className={
                "transition-color rounded-lg bg-mainYellow-500 px-8 py-3 font-semibold duration-300 hover:bg-mainYellow-600 hover:text-white sm:self-center"
              }>
              Придбати гайд
            </Link>
          </div>
          <div
            className={
              "relative h-[70vh] min-h-[420px] md:h-auto md:basis-1/2"
            }>
            <Image
              src={GuideBG}
              alt={"Guide Background"}
              fill
              className={
                "mx-auto max-w-[500px] object-cover object-top md:max-w-none"
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Guide;
