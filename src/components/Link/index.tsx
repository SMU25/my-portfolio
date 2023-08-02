import React, { FC, ReactNode } from "react";
import { Link as LinkComponent } from "react-router-dom";
import { scrollTop } from "src/utils/scrollTop";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
}

export const Link: FC<Props> = ({ children, href, className, isDisabled }) => {
  if (isDisabled) return <>{children}</>;

  return (
    <LinkComponent className={className} to={href} onClick={scrollTop}>
      {children}
    </LinkComponent>
  );
};
