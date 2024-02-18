import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // TODO: Fetch data
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 64,
        }}>
        {/* TODO: Add content */}
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
