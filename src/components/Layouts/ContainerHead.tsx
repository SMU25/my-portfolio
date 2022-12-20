import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";

const T_PREFIX = "container-head";

const DEFAULT_LINK_LABEL = "view-all";

interface Props {
  title?: string;
  titleClassName?: string;
  href?: string;
  linkLabel?: string;
}

export const ContainerHead: FC<Props> = ({
  title,
  titleClassName,
  href,
  linkLabel,
}) => {
  const { t } = useTranslation();

  const label = linkLabel || t(`${T_PREFIX} - ${DEFAULT_LINK_LABEL}`);

  return (
    <div className="flex justify-between items-baseline">
      <Heading
        className={cn(
          "max-w-1/2 text-lg sm:text-22 font-medium leading-15 truncate",
          titleClassName
        )}
        tagHeading={TagsHeading.H3}
      >
        {title}
      </Heading>
      {href && (
        <Link href={href} className="max-w-1/2 ml-10">
          <Button variant={ButtonVariants.SIMPLE_SECONDARY}>{label}</Button>
        </Link>
      )}
    </div>
  );
};
