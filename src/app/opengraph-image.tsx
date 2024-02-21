import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "CorgiMom image";
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: "red",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 64,
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
            textAlign: "center",
            width: "100%",
            color: "black",
          }}>
          <h1
            style={{
              fontSize: 72,
            }}>
            COrgiMom
          </h1>
        </div>
      </div>
    ),
    { ...size },
  );
}
