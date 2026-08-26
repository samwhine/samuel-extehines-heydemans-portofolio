import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0e0e12",
          padding: "80px",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
          {[4, 8, 14, 22, 30, 20, 12, 26, 34, 18, 10, 24, 16].map((h, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: h * 2,
                borderRadius: 4,
                background: "#4fd1c5",
                opacity: 0.7,
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Samuel Extehines Heydemans
        </div>
        <div style={{ fontSize: 30, color: "#e8b75c", marginTop: 24 }}>
          Video Editor · Creative Staff · Music Director
        </div>
      </div>
    ),
    { ...size }
  );
}
