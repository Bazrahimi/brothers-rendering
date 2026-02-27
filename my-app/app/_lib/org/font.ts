import { Inter, Playfair_Display, Roboto } from "next/font/google";
export const uiFond = Inter({ subsets: ["latin"] });
export const headingFont = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// TODO: change ROBOTo as well
export const bodyFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
