/** Deterministic “random” color from text (stable across reloads) */
function colorFromText(seed: string): { a: string; b: string } {
  // simple stable hash
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;

  // two related hues for a nice gradient
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;

  const a = `hsl(${hue1} 75% 45%)`;
  const b = `hsl(${hue2} 75% 38%)`;
  return { a, b };
}

function escapeSvgText(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Full-text SVG placeholder as a data URL (not initials).
 * - Deterministic “random” colors from text
 * - Wraps text into multiple lines to fit
 * - Rounded rectangle background + subtle gradient
 */
export function svgFromText(
  text: string,
  opts?: {
    w?: number;
    h?: number;
    padding?: number;
    // Rough control over line length; smaller => more wrapping
    maxCharsPerLine?: number;
  },
): string {
  const w = opts?.w ?? 1200;
  const h = opts?.h ?? 900; // 4:3
  const padding = opts?.padding ?? Math.round(Math.min(w, h) * 0.08);
  const maxCharsPerLine = opts?.maxCharsPerLine ?? 18;

  const { a, b } = colorFromText(text);

  // Basic word-wrap into lines (keeps it simple + predictable)
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= maxCharsPerLine) {
      line = next;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);

  // Limit lines so it doesn’t overflow
  const maxLines = 4;
  const finalLines = lines.slice(0, maxLines);
  if (lines.length > maxLines) {
    // add ellipsis to last line
    finalLines[maxLines - 1] = finalLines[maxLines - 1].replace(/\.*$/, "") + "…";
  }

  // Typography sizing based on box height + number of lines
  const lineCount = Math.max(finalLines.length, 1);
  const availableH = h - padding * 2;
  const fontSize = Math.floor(
    Math.min(
      availableH / (lineCount + 0.35), // vertical fit
      Math.min(w, h) * 0.12,           // cap size so it never gets silly
    ),
  );
  const lineHeight = Math.round(fontSize * 1.18);

  const safeLines = finalLines.map(escapeSvgText);

  // Unique ids so multiple SVGs on the page never conflict
  const gid = `g${Math.abs((text.length * 2654435761) | 0)}`;

  // Vertical centering of multiple <text> lines using <tspan>
  const startY = Math.round(h / 2 - ((lineCount - 1) * lineHeight) / 2);

  const tspans = safeLines
    .map((l, i) => `<tspan x="50%" y="${startY + i * lineHeight}">${l}</tspan>`)
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">

    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${a}" />
        <stop offset="100%" stop-color="${b}" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="18" flood-color="rgba(0,0,0,0.20)"/>
      </filter>
    </defs>

    <rect x="0" y="0" width="${w}" height="${h}" rx="48" ry="48" fill="url(#${gid})" filter="url(#shadow)"/>

    <!-- subtle highlight -->
    <path d="M 0 ${Math.round(h * 0.25)} C ${Math.round(w * 0.35)} ${Math.round(h * 0.05)}, ${Math.round(w * 0.65)} ${Math.round(h * 0.45)}, ${w} ${Math.round(h * 0.22)} L ${w} 0 L 0 0 Z"
      fill="rgba(255,255,255,0.12)"/>

    <text
      text-anchor="middle"
      dominant-baseline="middle"
      font-family="-apple-system, Segoe UI, Inter, Roboto, sans-serif"
      font-size="${fontSize}"
      font-weight="800"
      fill="#fff"
      opacity="0.96">
      ${tspans}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
