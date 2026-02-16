/** Deterministic hue from text */
function hueFromText(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h % 360;
}

/** Auto-contrast text color (white or near-black) */
function textColorForHue(hue: number): string {
  // lighter hues need darker text
  return hue > 40 && hue < 200 ? "#111827" : "#ffffff";
}

/** “NB”, “RS”, etc. */
function initialsFromText(text: string): string {
  const parts = text.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";

  const a = parts[0][0]?.toUpperCase() ?? "?";
  const b = parts.length > 1 ? (parts[1][0]?.toUpperCase() ?? "") : "";

  return a + b || a || "?";
}

/** SVG placeholder as data URL */
export function svgFromText(
  text: string,
  opts?: {
    w?: number;
    h?: number;
    mode?: "initials" | "text";
  },
): string {
  const w = opts?.w ?? 1200;
  const h = opts?.h ?? 900;
  const mode = opts?.mode ?? "initials";

  const display = mode === "text" ? text : initialsFromText(text);

  const hue = hueFromText(text);
  const bg = `hsl(${hue} 70% 45%)`;
  const fg = textColorForHue(hue);

  const fontSize = Math.round(Math.min(w, h) * (mode === "text" ? 0.12 : 0.28));

  const safe = display
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // unique gradient id prevents collision if multiple SVGs inline
  const gid = `g${hue}`;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg}" />
        <stop offset="100%" stop-color="hsl(${hue} 70% 35%)" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="40" ry="40" fill="url(#${gid})" />
    <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
      font-family="-apple-system, Segoe UI, Inter, Roboto, sans-serif"
      font-size="${fontSize}"
      font-weight="800"
      fill="${fg}">
      ${safe}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
