import { ImageResponse } from "next/og";

// import BG from

export const runtime = "edge";

export const alt = "About CorgiMom";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        className={
          "relative flex h-full w-full flex-col items-center justify-center"
        }
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   flexDirection: "column",
        //   position: "relative",
        // }}
      >
        <div
          className={
            "z-10 flex h-full flex-col items-center justify-center gap-y-7 py-16 text-center"
          }>
          <h1
            className={
              "text-5xl font-semibold text-white md:text-[68px] md:font-bold "
            }>
            <span
              className={
                "font-caveat text-6xl font-bold text-mainYellow-500 md:text-[88px] md:font-extrabold"
              }>
              Вікторія
            </span>{" "}
            - чарівна кінологиня
          </h1>
          <p
            className={
              "mb-7 max-w-[500px] text-lg font-medium text-white md:text-xl"
            }>
            Ваш експерт з комфортних відносин між Вами та Вашим песиком.
          </p>
        </div>
        {/* <img
        src={HeroBG}
        alt={"background"}
        className={"object-cover opacity-60"}
      /> */}
      </div>
    ),
    { ...size },
  );
}
