import { ImageResponse } from "next/og"

import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site-config"

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Rendered at build time by Satori, which only supports inline styles and flexbox.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1418 0%, #0d2731 55%, #10333f 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "56px", height: "8px", background: "#22b8cf", borderRadius: "4px" }} />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#7fdbe8",
            }}
          >
            {SITE_TAGLINE}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "96px", fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
            {SITE_NAME}
          </div>
          <div
            style={{
              marginTop: "28px",
              maxWidth: "880px",
              fontSize: "34px",
              lineHeight: 1.4,
              color: "#b9d4dc",
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: "26px", color: "#7fdbe8" }}>
          paulinotech.com
        </div>
      </div>
    ),
    size,
  )
}
