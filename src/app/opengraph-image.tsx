import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PiloterMaPharma — Logiciel de pilotage pour pharmacies";
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
          padding: "80px",
          position: "relative",
          backgroundImage:
            "linear-gradient(135deg, #1E3A8A 0%, #0A1F44 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />

        {/* Top-right brand mark */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 60,
            width: 60,
            height: 60,
            borderRadius: 14,
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19L11 13L14 16L20 7"
              stroke="#D4AF37"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7H20V13"
              stroke="#D4AF37"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            PiloterMaPharma
          </div>
          <div
            style={{
              fontSize: 44,
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: 24,
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            Pilotez votre officine en temps réel.
          </div>
        </div>

        {/* Bottom-left tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.7)",
            display: "flex",
          }}
        >
          Logiciel de pilotage pour pharmaciens titulaires
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
