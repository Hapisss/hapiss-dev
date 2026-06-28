import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#100f0d",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 110, fontWeight: 700, color: "#eceae5" }}>
          h
        </div>
        <div
          style={{
            position: "absolute",
            right: 44,
            bottom: 50,
            width: 16,
            height: 16,
            borderRadius: 16,
            background: "#d7a24b",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
