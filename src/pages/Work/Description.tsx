import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { DEFAULT_DESCRIPTION_CLASSNAME } from "./constants";

const T_PREFIX = "work-description";

const HEADING = "title";

interface Props {
  children?: ReactNode;
}

export const Description: FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-3 sm:mt-5">
      <Heading
        className="text-lg sm:text-22 font-medium"
        tagHeading={TagsHeading.H4}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <p className={cn("mt-0.5 sm:mt-2.5", DEFAULT_DESCRIPTION_CLASSNAME)}>
        {children}
      </p>
    </div>
  );
};
