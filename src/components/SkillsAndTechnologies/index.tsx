import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { MarkLabel } from "src/components/MarkLabel";
import { SkillsAndTechnologiesItem } from "src/types/work";
import { CLASSNAMES_LIST } from "./constants";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";

const T_PREFIX = "skills-and-technologies";

const HEADING = "title";

interface Props {
  className?: string;
  items: SkillsAndTechnologiesItem[];
}

export const SkillsAndTechnologies: FC<Props> = ({ className, items }) => {
  const { t } = useTranslation();

  if (!items?.length) return null;

  return (
    <div className={className}>
      <Heading
        className="text-lg sm:text-22 font-medium"
        tagHeading={TagsHeading.H4}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <div className="flex flex-wrap gap-2 mt-2.5">
        {items.map(({ key, title }) => (
          <MarkLabel
            key={key}
            className={cn("!py-1 capitalize !text-sm", CLASSNAMES_LIST[key])}
            isRandomColor={false}
          >
            {title}
          </MarkLabel>
        ))}
      </div>
    </div>
  );
};
