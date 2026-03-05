import React from "react";
type Props = {
  delay?: number;
  children: React.ReactNode;
};
const Delayed = async ({ delay = 10000, children }: Props) => {
  await new Promise((r) => setTimeout(r, delay));
  return <>{children}</>;
};

export default Delayed;
