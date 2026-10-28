import { ImageResponse } from "next/og";

export const alt = "RURANGO — websites, applications, and platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#191C1B",
          color: "#F2F4F0",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#B8F500",
          }}
        >
          RURANGO
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 650,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Custom software, websites, and search visibility.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#B9C0B9",
              maxWidth: 820,
            }}
          >
            Custom software · Web development · SEO · Google Business Profile
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#9AA39A",
          }}
        >
          <span>rurango.com</span>
          <span style={{ color: "#B8F500" }}>Umutungo · Umugina · Rojisitiri</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
