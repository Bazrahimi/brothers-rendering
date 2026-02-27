import { Inter, Playfair_Display } from "next/font/google";
export const uiFond = Inter({ subsets: ["latin"] });
export const headingFont = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const bodyFont = uiFond;
