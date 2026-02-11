import { Inter, Lusitana, Roboto } from "next/font/google";
export const uiFond = Inter({ subsets: ["latin"] });

export const headingFont = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const bodyFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

