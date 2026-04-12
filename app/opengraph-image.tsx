import { ImageResponse } from "next/og";

export const alt = "Peter Goodwin portfolio social preview";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 18% 14%, rgba(84, 138, 255, 0.42) 0, rgba(7, 10, 16, 0) 38%), linear-gradient(145deg, rgb(7, 10, 16) 0%, rgb(12, 21, 38) 55%, rgb(19, 30, 50) 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.82,
          }}
        >
          Peter Goodwin
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              maxWidth: "18ch",
            }}
          >
            Web Developer Portfolio
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              opacity: 0.86,
              maxWidth: "34ch",
            }}
          >
            Modern Next.js projects, frontend architecture, and polished UI
            interactions.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
