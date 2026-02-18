const CLD_BASE = "https://res.cloudinary.com/drvh5xeuw/image/upload";

const cld = (path: string | null | undefined, transform: string): string => {
  if (!path) return "";
  const rel = path.startsWith("/") ? path.slice(1) : path;
  return `${CLD_BASE}/${transform}/${rel}`;
};

export const cldLeafAuto = (path?: string | null) =>
  cld(path, "f_auto,q_auto:good,dpr_auto,ar_2:1,c_fill,g_auto,w_800");
