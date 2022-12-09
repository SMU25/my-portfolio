import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: FC<Props> = ({ children, className }) => (
  <section className={cn("px-20", className)}>
    <div className="max-w-406 w-full mx-auto">{children}</div>
  </section>
);
