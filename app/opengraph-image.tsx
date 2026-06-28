import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#100f0d",
          padding: 80,
        }}
      >
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#d7a24b" }} />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              color: "#9a938a",
              textTransform: "uppercase",
            }}
          >
            {profile.name}
          </div>
        </div>

        {/* thesis */}
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 68, fontWeight: 600, lineHeight: 1.12, maxWidth: 1000 }}>
          <span style={{ color: "#eceae5" }}>I build web apps that turn&nbsp;</span>
          <span style={{ color: "#d7a24b" }}>business workflows&nbsp;</span>
          <span style={{ color: "#eceae5" }}>into software.</span>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#eceae5" }}>hapiss</span>
            <span style={{ color: "#d7a24b" }}>.dev</span>
          </div>
          <div style={{ display: "flex", color: "#9a938a" }}>{profile.role}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
