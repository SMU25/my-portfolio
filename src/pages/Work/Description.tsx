import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";

const T_PREFIX = "work-description";

const HEADING = "title";

interface Props {
  children?: ReactNode;
}

export const Description: FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-6">
      <Heading
        className="text-lg sm:text-22 font-medium"
        tagHeading={TagsHeading.H4}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <p className="mt-2.5 text-black-base leading-6">{children}</p>
    </div>
  );
};
