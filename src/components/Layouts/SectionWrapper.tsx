import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  innerContainerClassName?: string;
}

export const SectionWrapper: FC<Props> = ({
  children,
  className,
  innerContainerClassName,
}) => (
  <section className={cn("flex-1 px-2.5 xs:px-5 sm:px-15 gl:px-40", className)}>
    <div className={cn("container", innerContainerClassName)}>{children}</div>
  </section>
);
