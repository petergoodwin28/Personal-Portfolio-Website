import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 512,
  height: 512,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(140deg, rgb(7, 10, 16) 0%, rgb(18, 34, 58) 100%)",
          color: "white",
          fontSize: 220,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        PG
      </div>
    ),
    {
      ...size,
    }
  );
}
