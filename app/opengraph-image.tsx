import { ImageResponse } from "next/og";

export const alt =
  "Proficio Fachcheck – Xerox PX300 und PX500 fachlich einordnen";
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
          padding: "70px 76px",
          color: "white",
          background:
            "radial-gradient(circle at 82% 18%, rgba(216,27,112,.72), transparent 35%), linear-gradient(135deg, #0B1020 0%, #182235 55%, #34248A 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 34,
              background: "linear-gradient(135deg, #6D4AFF, #D81B70)",
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800 }}>PROFICIO FACHCHECK</span>
            <span style={{ fontSize: 18, opacity: 0.72 }}>
              Jens Burghold / KI-Strategien
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <span style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
            Passt die Proficio zu Ihrem Betrieb?
          </span>
          <span style={{ fontSize: 29, marginTop: 24, opacity: 0.82 }}>
            25 Jahre Xerox-Digitaldruck. Heute verbunden mit KI-gestützter
            Geschäftsentwicklung.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
