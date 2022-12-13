import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: FC<Props> = ({ children, className }) => (
  <section className={cn("px-2.5 sm:px-15 gl:px-40", className)}>
    <div className="max-w-88.5 sm:max-w-150 md:max-w-195 lg:max-w-214 xl:max-w-323.5 w-full mx-auto">
      {children}
    </div>
  </section>
);
