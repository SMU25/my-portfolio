import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { DEFAULT_CLASS_NAME_HEADING } from "src/components/Heading/constants";
import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";

const T_PREFIX = "container-head";

const DEFAULT_LINK_LABEL = "view-all";

interface Props {
  children?: ReactNode;
  title?: string;
  titleClassName?: string;
  tagHeading?: TagsHeading;
  href?: string;
  linkLabel?: string;
}

export const ContainerHead: FC<Props> = ({
  children,
  title,
  titleClassName,
  tagHeading = TagsHeading.H3,
  href,
  linkLabel,
}) => {
  const { t } = useTranslation();

  const label = linkLabel || t(`${T_PREFIX} - ${DEFAULT_LINK_LABEL}`);

  return (
    <div className="flex justify-between items-center">
      <Heading
        className={cn(
          "max-w-1/2 default:leading-15 truncate",
          DEFAULT_CLASS_NAME_HEADING[tagHeading],
          titleClassName
        )}
        tagHeading={tagHeading}
      >
        {title}
      </Heading>
      {children}
      {href && (
        <Link href={href} className="max-w-1/2 ml-10">
          <Button variant={ButtonVariants.SIMPLE_SECONDARY}>{label}</Button>
        </Link>
      )}
    </div>
  );
};
