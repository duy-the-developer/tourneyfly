import type { ReactNode } from "react";

const Section = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return <section aria-labelledby={label}>{children}</section>;
};

export default Section;
