import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 180,
  height: 180,
};

export default function AppleIcon() {
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
          fontSize: 86,
          fontWeight: 700,
          letterSpacing: "-0.06em",
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
